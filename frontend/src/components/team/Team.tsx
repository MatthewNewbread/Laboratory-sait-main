"use client";

import PersonCard from "@/components/team/PersonCard";

interface Person {
  src: string;
  name: string;
  hoverText: string;
  descriptor?: string;
}

const tutors: Person[] = [
  {
    src: "/images/team/andre.png",
    name: "Андрей Охонько",
    descriptor: "руководитель направления «Дизайн»",
    hoverText: "Лучше ответственное неделание, чем безответственное делание",
  },
  {
    src: "/images/team/andre.png",
    name: "Максим Тизенгаузен",
    descriptor: "руководитель направления «Медиа»",
    hoverText:
      "Ты что, не знаешь главный закон физики? Всё прикольное стоит минимум восемь баксов",
  },
  {
    src: "/images/team/andre.png",
    name: "Захар Авсаджанов",
    descriptor: "руководитель направления «Моушн-дизайн»",
    hoverText: "Сложно – не значит невозможно. Сложно  – значит просто сложно",
  },
];

const supports: Person[] = [
  {
    src: "/images/team/andre.png",
    name: "Даниил Слезавин",
    hoverText: "Категорически всех приветствую",
  },
  {
    src: "/images/team/andre.png",
    name: "Анна Егазарян",
    hoverText: "Если смысла нет, выдумай его",
  },
  {
    src: "/images/team/andre.png",
    name: "Маргарита Гриценко",
    hoverText: "Здесь могла быть ваша реклама",
  },
  {
    src: "/images/team/andre.png",
    name: "София Акопян",
    hoverText: "Не копайся в себе, докапывайся до других",
  },
  {
    src: "/images/team/andre.png",
    name: "Елизавета Исакова",
    hoverText: "Не забудь дать дань уважения дверям",
  },
  {
    src: "/images/team/andre.png",
    name: "Чотчаева Арина",
    hoverText: "Меня попросили здесь что-то написать",
  },
  {
    src: "/images/team/andre.png",
    name: "Кагазежев Ислам",
    hoverText: "Дал бог Adobe - даст ист фантастиш",
  },
];

function chunkSmart<T>(list: T[]) {
  const rows: T[][] = [];
  for (let i = 0; i < list.length; ) {
    const rest = list.length - i;
    const take = rest === 4 ? 2 : Math.min(3, rest);
    rows.push(list.slice(i, (i += take)));
  }
  return rows;
}

function PeopleSection({ title, people }: { title: string; people: Person[] }) {
  const rows = chunkSmart(people);

  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-[50px] text-center text-primary text-title">{title}</h2>

      {/* вертикальный gap — 60 на desktop, чуть меньше на мобильных */}
      <div className="flex flex-col items-center gap-y-[60px] sm:gap-y-[40px]">
        {rows.map((row, i) => (
          <div
            key={i}
            className="
                flex justify-center
                gap-x-[123px] sm:gap-x-[60px]   /* горизонтальный gap адаптивный */
                max-[420px]:gap-x-[32px]
              "
          >
            {row.map((p) => (
              <PersonCard key={p.name} {...p} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <section>
      <h1 className="absolute z-2 pt-63 left-1/2 -translate-x-1/2 text-center text-title">
        командос
      </h1>
      <img
        src="/images/Team.png"
        alt=""
        className="relative -mb-100 w-full object-cover"
        sizes="100vw"
      />
      {/* чёрный блок с карточками */}
      <div className="mx-auto flex flex-col items-center bg-black pb-50 pt-100 gap-12.5">
        <PeopleSection title="тьюторы" people={tutors} />
        <PeopleSection title="саппорты" people={supports} />
      </div>
    </section>
  );
}
