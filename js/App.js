import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import {FavesProvider} from './context/FavesContext';
import client from './config/api';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavesProvider>
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </FavesProvider>
    </ApolloProvider>
  );
};
export default App;
