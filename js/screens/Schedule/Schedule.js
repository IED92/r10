import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({sessionData, navigation}) => {
  return (
    <View>
      {sessionData.length !== 0 && (
        <SessionList allSessions={sessionData} navigation={navigation} />
      )}
    </View>
  );
};

export default Schedule;
