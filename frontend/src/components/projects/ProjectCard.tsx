'use client';

import Image from 'next/image';
import Link from 'next/link';

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export interface ProjectCardProps {
  size?: 'large' | 'small';
  slug: string;
  title: string;
  descriptor?: string;
  logo: { src: string; alt?: string };
  image: { src: string; alt?: string };
  className?: string;
}

export default function ProjectCard({
  size = 'large',
  slug,
  title,
  descriptor,
  logo,
  image,
  className,
}: ProjectCardProps) {
  /* разные параметры для large / small */
  const variant = size === 'large'
    ? {
        aspect: 'aspect-[1596/895]',
        gap:   'gap-x-[100px]',
        logoW: 157,
        logoH: 180,
        text:  'max-w-[300px]',      // ≤ 300 px
        imageSizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
      }
    : {
        aspect: 'aspect-[757/425]',
        gap:   'gap-x-[40px]',
        logoW: 75,
        logoH: 86,
        text:  'max-w-[240px]',      // ≤ 240 px
        imageSizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
      };

  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-2xl',
        variant.aspect,
        className,
      )}
    >
      {/* фоновое изображение */}
      <Image
        src={image.src}
        alt={image.alt ?? title}
        fill
        sizes={variant.imageSizes}
        className="object-cover"
        priority
      />

      {/* hover-плашка */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center',
          'opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100',
          'bg-primary',
        )}
      >
        <div className={cn('flex items-center', variant.gap)}>
          {/* заголовок */}
          <h3 className={cn('text-special leading-snug text-left', variant.text)}>
            {title}
          </h3>

          {/* логотип */}
          <Image
            src={logo.src}
            alt={logo.alt ?? `${title} logo`}
            width={variant.logoW}
            height={variant.logoH}
            className="shrink-0"
          />

          {/* дескриптор */}
          {descriptor && (
            <p className={cn('text-form-2 leading-snug text-left', variant.text)}>
              {descriptor}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
