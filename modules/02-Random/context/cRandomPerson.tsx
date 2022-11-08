import { createContext, ReactNode, useReducer, useState } from "react";
// Interfaces
import { Person } from "../interfaces";
// Services
import { getRandomPerson } from "../services";

interface Data {
  label: string;
  value: string;
}

interface RandomPersonState {
  person: Person | null;
  selectedData: Data;
}

interface RandomPersonContextProps {
  state: RandomPersonState;
  setRandomPerson: () => void;
  changeSelectedData: (label: string, value: string) => void;
}

export const RandomPersonContext = createContext(
  {} as RandomPersonContextProps
);

export const RandomPersonProvider = ({ children }: { children: ReactNode }) => {
  const [person, setPerson] = useState<Person | null>(null);
  const [selectedData, setSelectedData] = useState<Data>({
    label: "",
    value: "",
  });

  const setRandomPerson = async () => {
    try {
      const person = await getRandomPerson();
      setPerson(person[0]);
      setSelectedData({
        label: "My name is",
        value: `${person[0].name.first} ${person[0].name.last}`,
      });
    } catch (error) {
      setPerson(null);
    }
  };

  const changeSelectedData = (label: string, value: string) => {
    setSelectedData({
      label,
      value,
    });
  };

  return (
    <RandomPersonContext.Provider
      value={{
        state: { person, selectedData },
        setRandomPerson,
        changeSelectedData,
      }}
    >
      {children}
    </RandomPersonContext.Provider>
  );
};
