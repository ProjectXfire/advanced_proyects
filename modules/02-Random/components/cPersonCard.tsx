import React, { useContext, useState } from "react";
import NextImage from "next/image";
// External libraries
import {
  MdPerson,
  MdEmail,
  MdCalendarToday,
  MdPhoneEnabled,
  MdStreetview,
  MdLock,
} from "react-icons/md";
// Services
import { RandomPersonContext } from "../context/cRandomPerson";
// Styles
import style from "styles/RandomPerson.module.scss";

export const PersonCard = () => {
  const {
    state: { person, selectedData },
    setRandomPerson,
    changeSelectedData,
  } = useContext(RandomPersonContext);

  return (
    <>
      {person && (
        <article className={style.card}>
          <NextImage
            width={120}
            height={120}
            style={{ borderRadius: "50%" }}
            src={person.name.first}
            alt={person.name.first}
            loader={() => person.picture.large}
            priority
          />
          <div className={style["card-line"]} />
          <p className={style.center}>{selectedData.label}</p>
          <div>
            <h3 className={style.center}>{selectedData.value}</h3>
          </div>
          <div className={style["card-icons"]}>
            <MdPerson
              onMouseOver={() =>
                changeSelectedData(
                  "My name is",
                  `${person.name.first} ${person.name.last}`
                )
              }
            />
            <MdEmail
              onMouseOver={() =>
                changeSelectedData("My email is", `${person.email}`)
              }
            />
            <MdCalendarToday
              onMouseOver={() =>
                changeSelectedData("My birthday is", `${person.dob.age}`)
              }
            />
            <MdPhoneEnabled
              onMouseOver={() =>
                changeSelectedData("My phone is", `${person.phone}`)
              }
            />
            <MdStreetview
              onMouseOver={() =>
                changeSelectedData(
                  "My address is",
                  `${person.location.street.number} ${person.location.street.name}`
                )
              }
            />
            <MdLock
              onMouseOver={() =>
                changeSelectedData("My password is", `${person.login.password}`)
              }
            />
          </div>
          <button
            className={style["card-action"]}
            type="button"
            onClick={setRandomPerson}
          >
            Random User
          </button>
        </article>
      )}
    </>
  );
};
