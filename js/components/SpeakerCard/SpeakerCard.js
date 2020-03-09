import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const SpeakerCard = ({session, navigation}) => {
  return (
    <>
      <Text style={styles.presented}>Presented By:</Text>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.push('Speaker', {speaker: session.speaker});
        }}>
        <Image
          style={styles.profilepic}
          source={{uri: session.speaker.image}}
        />
        <Text style={styles.name}>{session.speaker.name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SpeakerCard;
