import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const SpeakerCard = ({session, navigation}) => {
  return (
    <>
      <Text>Presented By:</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker', {speaker: session.speaker});
        }}>
        <Image
          style={styles.profilepic}
          source={{uri: session.speaker.image}}
        />
        <Text>{session.speaker.name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default SpeakerCard;
