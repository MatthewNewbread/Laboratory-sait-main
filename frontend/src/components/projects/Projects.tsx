"use client";

import ProjectCard from "./ProjectCard";
import Image from "next/image";

/** данные можно грузить из CMS; здесь — статичный массив для примера */
const projects = [
  {
    size: "large",
    img: "Priemnaya_company.png",
    title: "Приёмная кампания СКФУ",
    descriptor: "Университет в медиа-трендах – на одной волне с абитуриентами",
  },
  {
    size: "small",
    img: "Sunc_merch.png",
    title: "Мерч СУНЦ",
    descriptor: "Умная одежда для целеустремлённых школьников",
  },
  {
    size: "small",
    img: "Business_merch.png",
    title: "Бизнес-мерч",
    descriptor: "Мерч, в котором стремишься к успеху",
  },
  {
    size: "large",
    img: "Calendar.png",
    title: "Календарь СКФУ 2024",
    descriptor: "Три календаря — три взгляда на жизнь университета",
  },
  {
    size: "small",
    img: "Nota_bene.png",
    title: "Журнальная вёрстка",
    descriptor: "Правила типографики на страницах журналов",
  },
  {
    size: "small",
    img: "Etno_merch.png",
    title: "Этномерч",
    descriptor: "Синтез культурных традиций и современной моды",
  },
  {
    size: "large",
    img: "Navigation.png",
    title: "Брендирование СКФУ",
    descriptor: "Удобство и коммуникация в современном университете",
  },
  {
    size: "small",
    img: "Cyber_class.png",
    title: "Оформление киберкласса",
    descriptor: "Нейросети в интерьере будущего",
  },
  {
    size: "small",
    img: "Jelly_fish.png",
    title: "Jelly Fish",
    descriptor: "Остроумная упаковка для студенческого стартапа",
  },
  {
    size: "large",
    img: "Merch_ncfu.png",
    title: "Одеждомагазин",
    descriptor: "Стиль и ирония в университетском мерче",
  },
] as const;

/** slug = имя файла без расширения, приводим к lowercase */
const toSlug = (file: string) => file.replace(/\.[^.]+$/, "").toLowerCase();

export const Projects = () => {
  return (
    <section id="projects" className="bg-white mb-48">
      <Image
        src={"/images/projects/last-image.png"}
        alt={``}
        width={1920}
        height={1080}
        className="relative z-2 -mt-41 mb-25"
      />
      <div className="relative z-1">
        <h1 className="text-title px-39 pb-15">Наши проекты</h1>
        <div className="mx-auto px-4 md:px-12 lg:px-[162px]">
          <div className="grid justify-center gap-y-16 gap-x-12 md:grid-cols-2 md:gap-y-[80px] md:gap-x-[84px]">
            {projects.map((p) => (
              <ProjectCard
                key={p.img}
                size={p.size}
                className={p.size === "large" ? "md:col-span-2" : undefined}
                slug={toSlug(p.img)}
                title={p.title}
                descriptor={p.descriptor}
                logo={{ src: "/images/Logo_black.png", alt: "Logo" }}
                image={{
                  src: `/images/projects/${p.img}`,
                  alt: p.title,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
