import React from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import About from './screens/About/About';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* <Header />
          <Text>This is the Front Page</Text> */}
          <About />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
