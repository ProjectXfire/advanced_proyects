import React, { FC, useState } from "react";
import NextImage from "next/image";
// Data
import { projects } from "../data/projects";
// Styles
import style from "styles/Home.module.scss";

export const Projects = () => {
  const [{ active, card }, setSelectedCard] = useState({
    active: false,
    card: "",
  });

  const onMouseEnter = (name: string) => {
    setSelectedCard({
      active: true,
      card: name,
    });
  };

  const onMouseLeave = () => {
    setSelectedCard({
      active: false,
      card: "",
    });
  };

  return (
    <ul className={style["home-list"]}>
      {projects.map((project) => (
        <a
          className={
            active && card === project.title
              ? style["active"]
              : active && card !== project.title
              ? style["no-active"]
              : style["none-active"]
          }
          key={project.title}
          href={project.href}
          onMouseEnter={() => onMouseEnter(project.title)}
          onMouseLeave={onMouseLeave}
        >
          <div>
            <NextImage
              style={{ objectFit: "cover" }}
              fill
              src={project.image}
              alt={project.title}
              priority
              sizes="100vw"
            />
          </div>
          <p>{project.title}</p>
        </a>
      ))}
    </ul>
  );
};
