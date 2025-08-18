'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';           // или ваша локальная функция склейки

interface PersonCardProps {
  src: string;
  alt?: string;
  name: string;
  hoverText: string;
  descriptor?: string;
  className?: string;
}

export default function PersonCard({
  src,
  alt = '',
  name,
  descriptor,
  hoverText,
  className,
}: PersonCardProps) {
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="relative group">
        <Image
          src={src}
          alt={alt}
          width={233}
          height={233}
          className="h-[233px] w-[233px] rounded-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          priority
        />

        {hoverText && (
          <div
          className="
          pointer-events-none absolute inset-0
          rounded-full bg-primary
          flex items-center justify-center text-center text-card
          opacity-0 transition-opacity duration-300 group-hover:opacity-100
        "
          >
            <p
              className="
                max-w-[190px] text-center leading-snug
                text-black
              "
            >
              {hoverText}
            </p>
          </div>
        )}
      </div>

      <p className="mt-[23px] max-w-[237px] text-center text-name text-white">{name}</p>

      {descriptor && (
        <p className="mt-2 max-w-[133px] text-center text-description text-white">
          {descriptor}
        </p>
      )}
    </div>
  );
}
