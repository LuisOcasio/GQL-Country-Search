import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CONTINENTS = gql`
  query {
    continents {
      name
    }
  }
`;

const Continent = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.continents.map((element) => {
        return <p>{element.name}</p>;
      })}
    </>
  );
};

export default Continent;
