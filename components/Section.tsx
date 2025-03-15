import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function Section({ children, title, className = '' }: SectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      {title && (
        <h2 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-primary inline-block">
          {title}
        </h2>
      )}
      <div className="grid-container">
        {children}
      </div>
    </section>
  );
}
