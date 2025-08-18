"use client";

import Image from "next/image";

export default function Team() {
  return (
    <section className="pb-25 bg-black">
      <div className="flex items-center gap-x-[178px]">
        <div className="relative inline-block">
          <Image
            src="/svg/Contact/Circle.svg"
            alt="Логотип"
            width={792}
            height={519}
            priority
          />
          <p className="absolute left-[160px] top-1/2 -translate-y-1/2 max-w-[640px] text-subtitle text-black text-left">
            Присоединяйся к команде
          </p>
        </div>
        <div className="flex flex-row items-end gap-[30px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex w-[627px] flex-col gap-[25px]"
          >
            <input
              type="text"
              name="fio"
              required
              pattern="^[A-Za-zА-Яа-яЁё\s\-]{2,100}$"
              title="Только буквы, дефис и пробел"
              placeholder="ФИО"
              className="h-[63px] bg-white px-[68px] text-form"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="h-[63px] bg-white px-[68px] text-form"
            />
            <input
              type="tel"
              name="phone"
              required
              inputMode="tel"
              placeholder="Телефон"
              pattern="^\+?[0-9\s\-]{10,15}$"
              title="Введите 10-15 цифр (можно +, пробел, дефис)"
              className="h-[63px] bg-white px-[68px] text-form"
            />
            <button
              type="submit"
              className={`relative overflow-hidden z-1 h-[63px] px-[68px] bg-primary text-black text-form-2 hover-button-animation`}
            >
              Оставить заявку
            </button>
          </form>
          <Image
            src="/svg/Contact/Cat.svg"
            alt="cat"
            width={122}
            height={114}
            priority
          />
        </div>
      </div>
    </section>
  );
}
