import React from 'react';
import {SafeAreaView, Image, Text, View, ScrollView} from 'react-native';
import moment from 'moment';

import styles from './styles';

import Footer from '../../components/Footer';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  getFavedSessionIds,
  removeFaveSession,
}) => {
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>{session.tile}</Text>
      <Text>{moment(session.startTime).format('LT')}</Text>
    </View>
  );
};

export default Session;
