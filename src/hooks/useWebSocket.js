import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * A hook to manage WebSocket connections with proper cleanup
 * Handles browser back-forward cache issues
 */
const useWebSocket = (url, options = {}) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const [error, setError] = useState(null);
  
  // Use refs to avoid stale closures in event callbacks
  const socketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  
  // Extract options with defaults
  const { 
    reconnectAttempts = 5,
    reconnectInterval = 3000,
    onOpen,
    onMessage,
    onClose,
    onError,
    protocols
  } = options;
  
  // Create socket connection
  const connectSocket = useCallback(() => {
    // Clean up any existing socket
    if (socketRef.current) {
      socketRef.current.onopen = null;
      socketRef.current.onmessage = null;
      socketRef.current.onclose = null;
      socketRef.current.onerror = null;
      socketRef.current.close();
    }
    
    try {
      const newSocket = new WebSocket(url, protocols);
      
      newSocket.onopen = (event) => {
        setIsConnected(true);
        setError(null);
        if (onOpen) onOpen(event);
      };
      
      newSocket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setLastMessage(message);
        if (onMessage) onMessage(message, event);
      };
      
      newSocket.onclose = (event) => {
        setIsConnected(false);
        if (onClose) onClose(event);
        
        // Handle reconnection
        if (!event.wasClean && reconnectAttempts > 0) {
          reconnectTimeoutRef.current = setTimeout(() => {
            connectSocket();
          }, reconnectInterval);
        }
      };
      
      newSocket.onerror = (event) => {
        setError(event);
        if (onError) onError(event);
      };
      
      socketRef.current = newSocket;
      setSocket(newSocket);
    } catch (err) {
      setError(err);
      if (onError) onError(err);
    }
  }, [url, protocols, reconnectAttempts, reconnectInterval, onOpen, onMessage, onClose, onError]);
  
  // Connect on mount
  useEffect(() => {
    connectSocket();
    
    // BF-Cache fix: Properly handle page hide/show events
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // When page becomes visible again (e.g., after back navigation)
        connectSocket();
      } else {
        // When page is hidden (e.g., navigating away)
        if (socketRef.current) {
          socketRef.current.onopen = null;
          socketRef.current.onmessage = null;
          socketRef.current.onclose = null;
          socketRef.current.onerror = null;
          socketRef.current.close();
        }
      }
    };
    
    // Subscribe to page visibility events
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Clean up on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      
      if (socketRef.current) {
        socketRef.current.onopen = null;
        socketRef.current.onmessage = null;
        socketRef.current.onclose = null;
        socketRef.current.onerror = null;
        socketRef.current.close();
      }
    };
  }, [connectSocket]);
  
  // Send message function
  const sendMessage = useCallback((data) => {
    if (socketRef.current && isConnected) {
      socketRef.current.send(JSON.stringify(data));
      return true;
    }
    return false;
  }, [isConnected]);
  
  // Manually close connection
  const closeConnection = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close();
    }
  }, []);
  
  return {
    socket,
    isConnected,
    lastMessage,
    error,
    sendMessage,
    closeConnection
  };
};

export default useWebSocket;
