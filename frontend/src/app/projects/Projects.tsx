"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import Image from "next/image";

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
    title: "Бизнес\nмерч",
    descriptor: "Мерч, в котором стремишься к успеху",
  },
  {
    size: "large",
    img: "Calendar.png",
    title: "Календарь\nСКФУ\n2024",
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
    title: "Брендиро\u00ADвание СКФУ",
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

const toSlug = (file: string) => file.replace(/\.[^.]+$/, "").toLowerCase();

export const Projects = () => {
  return (
    <section className="relative w-full -mt-34 z-[2]">
      <Image
        src={"/images/projects/last-image.png"}
        alt={``}
        width={1920}
        height={1080}
      />
      <div id="projects" className="relative py-[clamp(70px,8vw,90px)] px-[clamp(40px,calc(-137px+23.07vw),195px)]">
        <h1 className="w-full text-title pb-15 -ml-2">Наши проекты</h1>
          <div className="grid grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-2 lg:gap-y-[70px] lg:gap-x-[70px]">
            {projects.map((p) => (
              <ProjectCard
                key={p.img}
                size={p.size}
                className={p.size === "large" ? "md:col-span-2" : undefined}
                slug={toSlug(p.img)}
                title={p.title}
                descriptor={p.descriptor}
                logo={{ src: "/svg/Logo-full_black.svg", alt: "Logo" }}
                image={{
                  src: `/images/projects/${p.img}`,
                  alt: p.title,
                }}
              />
            ))}
          </div>
      </div>
    </section>
  );
};
