import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ResponsiveImage({ src, alt, className }: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${isLoading ? 'blur-sm' : 'blur-0'}`}>
      <Image
        src={src}
        alt={alt}
        className={`transition-all duration-300 ${className}`}
        layout="responsive"
        width={100}
        height={100}
        objectFit="cover"
        loading="lazy"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
