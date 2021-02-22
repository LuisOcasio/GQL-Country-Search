import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient/client.js';
import Continents from './components/Continents';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Continents />
    </ApolloProvider>
  );
};

export default App;
