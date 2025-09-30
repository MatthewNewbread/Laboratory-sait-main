"use client";

import Image from "next/image";

export const JellyFishProject = () => {
  const images = [
    "/images/projects/_content/jelly_fish/1-image.png",
    "/images/projects/_content/jelly_fish/2-image.png",
  ];

  return (
    <article
      className="w-full"
    >
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-screen">
          <Image
            src={src}
            alt={`Jelly Fish ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0} 
          />
        </div>
      ))}
    </article>
  );
};
