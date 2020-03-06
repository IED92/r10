import React from 'react';
import {TouchableOpacity, Text, View, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import SpeakerCard from '../../components/SpeakerCard/SpeakerCard';

const Session = ({
  session,
  navigation,
  faveIds,
  addFaveSession,
  removeFaveSession,
}) => {
  return (
    <View style={styles.container}>
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
      <Text style={styles.description}>{session.description}</Text>
      <SpeakerCard
        style={styles.card}
        session={session}
        navigation={navigation}
      />
      {!faveIds.includes(session.id) ? (
        // TODO: Refacter buttons as components
        <TouchableOpacity
          style={styles.favebutton}
          onPress={() => {
            addFaveSession(session.id);
          }}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Add to Faves</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favebutton}
          onPress={() => {
            removeFaveSession(session.id);
          }}>
          <LinearGradient
            colors={['#9963ea', '#8797D6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Remove from Faves</Text>
          </LinearGradient>
        </TouchableOpacity>
        // End refactor
      )}
    </View>
  );
};

export default Session;
