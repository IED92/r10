import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';

const Schedule = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> This is the Schedule Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text>Go To Session</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Speaker')}>
        <Text>Go To Speaker Modal</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

export default Schedule;
