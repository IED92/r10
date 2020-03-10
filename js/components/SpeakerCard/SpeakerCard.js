import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import textStyles from '../../config/styles';
import styles from './styles';

const SpeakerCard = ({session, navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.push('Speaker', {speaker: session.speaker});
        }}>
        <Image
          style={styles.profilepic}
          source={{uri: session.speaker.image}}
        />
        <Text style={[textStyles, styles.name]}>{session.speaker.name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SpeakerCard;
