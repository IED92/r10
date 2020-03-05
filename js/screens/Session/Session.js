import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import styles from './styles';
import SpeakerCard from '../../components/SpeakerCard/SpeakerCard';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>
        {faveIds.includes(session.id, 0) ? (
          <MaterialCommunityIcons name="heart" />
        ) : null}
      </Text>
      <Text>{session.tile}</Text>
      <Text>{moment(session.startTime).format('LT')}</Text>
      <Text>{session.description}</Text>
      <SpeakerCard session={session} navigation={navigation} />
      {!faveIds.includes(session.id) ? (
        <TouchableOpacity
          onPress={() => {
            addFaveSession(session.id);
          }}>
          <Text>Add To Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            removeFaveSession(session.id);
          }}>
          <Text>Remove From Faves</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Session;
