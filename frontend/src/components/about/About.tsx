"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "/images/about/slider-1.png",
  "/images/about/slider-2.png",
  "/images/about/slider-3.png",
  "/images/about/slider-4.png",
];

const phrases = [
  "творческое сообщество",
  "мастерклассы\nи воркшопы",
  "только полезная инфа\nбез воды",
  "возможность повысить\nсвои скиллы",
  "инсайды\nот профессионалов",
  "реальные кейсы",
];

const TYPING_SPEED = 50;
const WAIT_BEFORE_ERASE = 1800;
const ERASE_SPEED = 30;
const WAIT_BEFORE_NEXT = 400;

const fullText = "Мемы с котами всегда\nактуальны и к месту";

export const About = () => {
  const scrollSpeed = 20000;
  const [hovered, setHovered] = useState(false);
  const [typedText, setTypedText] = useState("");

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "erasing">(
    "typing"
  );
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!hovered) {
      setTypedText("");
      return;
    }

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedText(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, 20);
    }, 250); // задержка перед началом печати

    return () => clearTimeout(timeout);
  }, [hovered]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentPhrase = phrases[index];

    if (phase === "typing") {
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhase("waiting");
        }, WAIT_BEFORE_ERASE);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("erasing");
      }, WAIT_BEFORE_NEXT);
    } else if (phase === "erasing") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, ERASE_SPEED);
      } else {
        setIndex((prev) => (prev + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, index]);

  return (
    <section id="about" className="w-full bg-black">
      <Image
        src={"/images/about/first-image.png"}
        alt={``}
        width={1920}
        height={1080}
        className="w-full h-auto object-contain pt-[400px]"
      />

      {/* Слайдер */}
      <div className="overflow-hidden w-full py-6.5">
        <div
          className="flex animate-slider-scroll w-max"
          style={{ animationDuration: `${scrollSpeed}ms` }}
        >
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="mr-[30px] last:mr-0 flex-shrink-0 w-[559px] h-[434px] overflow-hidden rounded-[10px]"
            >
              <Image
                src={src}
                alt={`slide-${idx}`}
                width={559}
                height={434}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Кот + диалог */}
      <div className="flex items-center justify-end w-full py-16">
        {/* Диалог */}
        <div
          className={`relative ml-[3px] w-[274px] h-[76px] transition-transform duration-500 ease-out origin-bottom-right
      ${hovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
    `}
        >
          <Image
            src="/svg/About/dialog.svg"
            alt="dialog"
            fill
            className="object-contain"
          />
          <p className="absolute inset-0 flex items-center justify-center pr-4 text-[15px] font-normal font-['Roboto'] text-black text-left leading-tight whitespace-pre-line">
            {typedText}
          </p>
        </div>

        {/* Обёртка кота с наведением */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src="/svg/About/cat.svg"
            alt="cat"
            width={138}
            height={126}
            className="shrink-0 cursor-pointer"
          />
        </div>
      </div>

      <div className="relative z-1 w-full bg-black text-white px-4 sm:px-6 lg:px-81 pt-16 pb-82 flex flex-col gap-12">
        {/* Левый верхний логотип — абсолютно спозиционирован */}
        <div className="absolute right-4 top-[125px] sm:right-6 lg:right-61.5">
          <Image
            src="/svg/Logo.svg"
            alt="logo"
            width={120}
            height={138}
            className="object-contain"
          />
        </div>

        {/* БЛОК 1: Заголовок + Анимация */}
        <div className="flex flex-col gap-4 max-w-[1200px] ">
          <h2 className="text-main text-[24px] sm:text-[32px] font-semibold">
            Давай к нам, у нас есть
          </h2>
          <div className="relative min-h-[60px] text-[24px] sm:text-[96px] font-bold font-['Roboto'] text-primary whitespace-pre-line leading-snug">
            {text}
            <span className="inline-block w-[17px] h-[1.2em] bg-white align-text-bottom ml-1 animate-blink" />
          </div>
        </div>

        {/* БЛОК 2: Нижний текст + числовой блок */}
        <div className="flex flex-col gap-8 max-w-[1100px]">
          <p className="text-main leading-relaxed">
            Мы встречаемся два раза в неделю. <br />
            Каждое занятие – это погружение в реальный рабочий процесс, много
            практики, комментарии и наставления тьюторов, а ещё перерыв с
            вкусняшками и шутками-прибаутками.
          </p>

          <div className="flex items-center gap-x-[62px] gap-y-4 text-primary text-main">
            {/* Блок 3-3 */}
            <div className="flex items-center gap-[36px]">
              {/* 3 раза в неделю */}
              <div className="flex items-center gap-[7px]">
                <p className="text-[80px] font-medium">3</p>
                <p className="w-[155px] min-w-[155px] text-wrap leading-tight">
                  раза
                  <br />в неделю
                </p>
              </div>

              {/* Иконка "more" */}
              <Image
                src="/svg/About/More.svg"
                alt="more"
                width={45}
                height={68}
                className="object-contain"
              />

              {/* 3 академических часа */}
              <div className="flex items-center gap-[7px]">
                <p className="text-[80px] font-medium">3</p>
                <p className="w-[250px] min-w-[250px] text-wrap leading-tight">
                  академических часа
                </p>
              </div>
            </div>

            {/* Иконка "+" */}
            <Image
              src="/svg/About/Plus.svg"
              alt="plus"
              width={58}
              height={58}
              className="object-contain"
            />
            {/* Дополнительный текст */}
            <div>
              <p className="w-[626px] min-w-[626px] text-wrap leading-tight">
                дополнительные занятия с тьюторами, мастер-классы и воркшопы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
