import React from "react";
// Styles
import style from "styles/RandomPerson.module.scss";
// Components
import { PersonCard } from "./cPersonCard";

export const RandomPerson = () => {
  return (
    <section className={style.section}>
      <div></div>
      <div></div>
      <PersonCard />
    </section>
  );
};
