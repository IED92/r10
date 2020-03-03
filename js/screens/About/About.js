import React from 'react';
import {SafeAreaView, Image, StyleSheet, Text, ScrollView} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

class About extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Text>{`<R10>`}</Text>
          <Text>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text>Date and Venue</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default About;
