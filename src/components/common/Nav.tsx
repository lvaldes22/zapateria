import Link from "next/link";
import React, { FC } from "react";

export const Nav: FC = () => {
  return (
    <nav className="bg-slate-200 w-full flex gap-5 p-6 items-center text-2xl">
      <Link href="/">
        <a>Inicio</a>
      </Link>
      {/* -- 5px -- */}
      <Link href="/articles">
        <a>Articulos</a>
      </Link>
    </nav>
  );
};
