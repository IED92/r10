import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AboutContainer from './screens/About';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <AboutContainer />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
