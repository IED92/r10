import React from 'react';
import {View, Text} from 'react-native';
import SessionList from '../../components/SessionList/SessionList';
import PropTypes from 'prop-types';
import styles from './styles';
import textStyles from '../../config/styles';

const Faves = ({sessions, faves, navigation}) => {
  return sessions.length <= 0 ? (
    <View style={styles.container}>
      <Text style={[textStyles, styles.text]}>
        You haven't faved any sessions yet.
      </Text>
    </View>
  ) : (
    <View>
      <SessionList sessions={sessions} faves={faves} navigation={navigation} />
    </View>
  );
};

Faves.propTypes = {
  sessions: PropTypes.array,
  faves: PropTypes.array,
  navigation: PropTypes.object,
};

export default Faves;
