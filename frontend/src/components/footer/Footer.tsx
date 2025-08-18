"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-row items-start w-full bg-black px-40 pb-11 gap-14">
      <div className="flex flex-col gap-16">
        <p className="text-primary text-main max-w-[780px]">
          Интересует сотрудничество или обучение с нами? Обращайтесь сюда
        </p>
        <nav className="flex flex-row items-center text-main whitespace-nowrap text-white gap-x-44">
          <Link href="#main">
            <Image
              src="/svg/Logo_white.svg"
              alt="star"
              width={212}
              height={138}
              priority
            />
          </Link>
          <Link
            href="#about"
            className="hover-underline-animation"
            style={{ "--underline-color": "white" }}
          >
            О нас
          </Link>
          <Link
            href="#project"
            className="hover-underline-animation"
            style={{ "--underline-color": "white" }}
          >
            Проекты
          </Link>
        </nav>
        <p className="text-white text-form">
          © Лаборатория медиа и дизайна, 2024
        </p>
      </div>
      <div>
        <Image
          src="/svg/Footer/Symbol.svg"
          alt="star"
          width={48}
          height={64}
          priority
          className="pt-1"
        />
      </div>
      <div className="relative inline-block flex-shrink-0">
        <Image
          src="/svg/Footer/Star.svg"
          alt="star"
          width={646}
          height={331}
          priority
        />
        <p className="absolute inset-0 flex items-center justify-center text-contacts text-black max-w-[320px] mx-auto">
          +7 (XXX)-XXX-XX-XX pisatsyuda@lab.ru
        </p>
      </div>
    </section>
  );
}
