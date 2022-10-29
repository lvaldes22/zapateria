import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Nav } from "../common/Nav";

interface TProps {
  title: string;
  description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  children,
}) => {
  const displayTitle = `${title} | Zapateria Lewis Albert`;

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Head>
        <title>{displayTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white h-20">
        <Nav />
      </header>
      <main className="grow flex flex-col text-white">{children}</main>
      <footer className="bg-slate-200 flex p-6 h-20 text-black items-center justify-center">
        <a>
          Powered by <span className="">Zapateria Lewis Albert</span>
        </a>
      </footer>
    </div>
  );
};
