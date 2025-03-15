/**
 * This file provides compatibility layer for Three.js features that might be missing
 * in the version we're using but required by some dependencies.
 */

import * as THREE from 'three';

// Add BatchedMesh if it doesn't exist
if (!THREE.BatchedMesh) {
  // Simple mock implementation
  THREE.BatchedMesh = class BatchedMesh extends THREE.Mesh {
    constructor(maxGeometryCount, maxVertexCount, maxIndexCount) {
      super(new THREE.BufferGeometry());
      this.maxGeometryCount = maxGeometryCount;
      this.maxVertexCount = maxVertexCount;
      this.maxIndexCount = maxIndexCount;
      this.geometryCount = 0;
      console.warn('Using mock implementation of BatchedMesh. Consider upgrading three.js.');
    }

    // Add required methods
    addGeometry() {
      console.warn('BatchedMesh.addGeometry is not fully implemented in this version.');
      return 0;
    }
    
    setMatrixAt(index, matrix) {
      console.warn('BatchedMesh.setMatrixAt is not fully implemented in this version.');
    }
  };
}

export default THREE;
