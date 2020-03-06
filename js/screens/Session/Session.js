import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
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
  console.log(session.title);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.faveview}>
          <Text style={styles.location}>{session.location}</Text>
          <Text>
            {faveIds.includes(session.id, 0) ? (
              <MaterialCommunityIcons name="heart" color="red" />
            ) : null}
          </Text>
        </View>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.time}>
          {moment(session.startTime).format('h:mm A')}
        </Text>
      </View>
      <Text style={styles.description}>{session.description}</Text>
      <SpeakerCard session={session} navigation={navigation} />
      {!faveIds.includes(session.id) ? (
        <TouchableOpacity
          style={styles.favebutton}
          onPress={() => {
            addFaveSession(session.id);
          }}>
          <Text>Add To Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favebutton}
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
