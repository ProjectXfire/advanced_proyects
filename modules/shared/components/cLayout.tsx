import Head from "next/head";
import React, { FC } from "react";
// Styles
import style from "styles/Home.module.scss";
// Components
import { FloatButton } from "modules/shared/components";

interface Props {
  title: string;
  content: string;
  children: JSX.Element | JSX.Element[];
  noSizes?: boolean;
}

export const Layout: FC<Props> = ({
  content,
  title,
  children,
  noSizes = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Adavnced Projects App" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main" className={!noSizes ? style["main"] : ""}>
        <FloatButton />
        {children}
      </main>
    </>
  );
};
