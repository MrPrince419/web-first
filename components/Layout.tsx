import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Prince Asiimwe' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet" />
      </Head>

      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b">
        <nav className="container mx-auto px-4 py-4">
          {/* Add your navigation components here */}
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 animate-in">
        {children}
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          {/* Add your footer content here */}
        </div>
      </footer>
    </div>
  );
}
