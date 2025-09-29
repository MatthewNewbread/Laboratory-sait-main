"use client";

export const PriemnayaCompanyProject = () => {
  return (
    <article
      className="w-full px-6 py-12"
      aria-label="Проект Приёмная кампания СКФУ"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") (e.currentTarget as HTMLElement).blur();
      }}
    >
      <h1 className="text-3xl font-bold">Приёмная кампания СКФУ</h1>
      <p className="mt-4 max-w-2xl">
        Университет в медиа-трендах – на одной волне с абитуриентами
      </p>

      {/* здесь потом добавим реальные секции */}
      <section className="mt-10 border-t pt-6">Секция 1 (пока пусто)</section>
      <section className="mt-10 border-t pt-6">Секция 2 (пока пусто)</section>
    </article>
  );
};
