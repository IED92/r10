import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';

class Faves extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>This is the faves screen</Text>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Faves;
