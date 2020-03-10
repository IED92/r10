import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import textStyles from '../../config/styles';
import styles from './styles';
import PropTypes from 'prop-types';

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

SpeakerCard.propTypes = {
  speaker: PropTypes.object,
  session: PropTypes.object,
  navigation: PropTypes.object,
};

export default SpeakerCard;
