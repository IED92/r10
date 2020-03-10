import React, {Component} from 'react';
import {View, Text} from 'react-native';
import textStyles from '../../config/styles';
import styles from './styles';

const Maps = () => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles, styles.text]}>Maps Coming Soon!</Text>
    </View>
  );
};

export default Maps;
