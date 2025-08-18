"use client";

import { useState, useEffect } from "react";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import Image from "next/image";

export const Header = () => {
  const [muted, setMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const vid = document.getElementById("bg-video") as HTMLVideoElement | null;
    if (vid) vid.muted = muted;
  }, [muted]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMute = () => setMuted((m) => !m);
  return (
    <header className="fixed w-full h-[69px] bg-primary z-50">
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavDesktop />
      </div>
      <button
          onClick={toggleMute}
          className=" absolute top-1/2 left-[calc(90%)] -translate-y-1/2 w-[60px] h-[60px]"
          aria-label={muted ? "Включить звук" : "Выключить звук"}
        >
          <Image
            src={muted ? "/svg/Header/din-on.svg" : "/svg/Header/din-off.svg"}
            alt={muted ? "mute icon" : "unmute icon"}
            width={60}
            height={60}
            priority
          />
        </button>
    </header>
  );
};
