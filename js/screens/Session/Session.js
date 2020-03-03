import React from 'react';
import {SafeAreaView, Image, Text, View, ScrollView} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';

const Session = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Session Screen</Text>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Session;
