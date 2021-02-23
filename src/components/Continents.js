import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Image, List, Icon } from 'semantic-ui-react';

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
        return (
          <List animated verticalAlign='middle'>
            <List.Item>
              <List.Content
                style={{
                  height: '7.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <List.Header
                  style={{
                    height: '100%',
                    fontSize: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <Icon name='world' />
                  <p style={{ textDecoration: 'underline' }}>{element.name}</p>
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        );
      })}
    </>
  );
};

export default Continent;
