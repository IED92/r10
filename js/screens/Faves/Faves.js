import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import styles from './styles';
import SessionList from '../../components/SessionList/SessionList';

const Faves = ({sessions, faves, navigation}) => {
  console.log('faves?????', faves);
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SessionList
          sessions={sessions}
          faves={faves}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faves;
