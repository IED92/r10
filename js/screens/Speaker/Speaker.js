import React from 'react';
import {SafeAreaView, Image, Text, View, ScrollView} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';

class Speaker extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>Speaker Screen</Text>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Speaker;