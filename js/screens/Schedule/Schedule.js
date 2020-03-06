import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({faveIds, sessionData, navigation}) => {
  return (
    <View>
      {sessionData.length !== 0 && (
        <SessionList
          faves={faveIds}
          sessions={sessionData}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default Schedule;
