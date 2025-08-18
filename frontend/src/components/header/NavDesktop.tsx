'use client';

import Link from "next/link";
import React from "react";

const navItems = [
  { name: "главная", href: "#home" },
  { name: "о нас", href: "#about" },
  { name: "проекты", href: "#projects" },
  { name: "контакты", href: "#contacts" },
];

export const NavDesktop = () => {
  return (
    <nav className="flex items-center">
      {navItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link href={item.href} scroll={true} className="text-form-2 hover-underline-animation" style={{ '--underline-color': 'black' }}>
            {item.name}
          </Link>
          {index < navItems.length - 1 && (
            <span className="w-[234px] flex-shrink-0" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
