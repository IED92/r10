import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SectionList from '../../components/SessionList';

import styles from './styles';

import Footer from '../../components/Footer';

const Schedule = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> This is the Schedule Screen</Text>
      <SectionList />
      <TouchableOpacity onPress={() => navigation.navigate('Session')}>
        <Text>Go To Session</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

export default Schedule;
