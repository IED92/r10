import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/api';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </ApolloProvider>
  );
};
export default App;
