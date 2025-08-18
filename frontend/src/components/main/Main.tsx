"use client";

import React from "react";
import Video from "next-video";
import Image from "next/image";

export const Main = () => {
  return (
    <section id="home" className="relative w-full aspect-video">
      <video
        id="bg-video"
        src="/_next-video/lab-video.mp4"
        className="absolute inset-0 w-full h-full object-cover bg-primary z-[1]"
        controls={false}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-[900px] w-full z-[2]">
        <Image
              src="/svg/Main/Wave.svg"
              alt=""
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-contain"
            />
        <div className="absolute top-1/2 left-0 w-full px-[240px] -translate-y-1/2">
          <p className="text-main max-w-[1070px]">
            Лаборатория – это концентрат дизайна и медиа будущего. <br />
            Здесь мы учимся на реальных кейсах в реальном времени, а тьюторы и
            кураторы задают работе правильное направление, делятся ценным опытом
            и секретами профессионального сообщества.
          </p>
        </div>
      </div>
    </section>
  );
};
