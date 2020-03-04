import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {formatSessionData} from './helpers/formatSessionData';
import {useQuery} from '@apollo/react-hooks';
import {ALL_SESSIONS} from '../../config/queries';
import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({navigation}) => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error </Text>
      </View>
    );
  }
  if (data) {
    const allSessions = formatSessionData(data.allSessions);
    return (
      <View>
        {allSessions.length !== 0 && (
          <SessionList allSessions={allSessions} navigation={navigation} />
        )}
      </View>
    );
  }
};

export default Schedule;
