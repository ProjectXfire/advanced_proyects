import React, { useContext, useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
// Interfaces
import { Person } from "modules/02-Random/interfaces";
// Services
import { getRandomPerson } from "modules/02-Random/services";
import { RandomPersonContext } from "modules/02-Random/context/cRandomPerson";
// Components
import { RandomPerson } from "modules/02-Random/components";
import { Layout } from "modules/shared/components";

//******** COMPONENTS ********//

interface Props {
  person: Person;
}

const RandomPersonPage: NextPage<Props> = ({ person }) => {
  const { setRandomPerson } = useContext(RandomPersonContext);

  useEffect(() => {
    setRandomPerson();
  }, []);

  return (
    <Layout title="Random Person App" content="random person" noSizes={true}>
      <RandomPerson />
    </Layout>
  );
};

export default RandomPersonPage;
