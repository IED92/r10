import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import textStyles from '../../config/styles';
import styles from './styles';
import PropTypes from 'prop-types';

const SessionListItem = ({faves, item, navigation}) => {
  return (
    <TouchableHighlight
      style={styles.item}
      underlayColor={'transparent'}
      onPress={() => {
        navigation.navigate('Session', {
          session: item,
        });
      }}>
      <View style={styles.item}>
        <Text style={[textStyles, styles.title]}>{item.title}</Text>
        <View style={styles.location}>
          <Text style={[textStyles, styles.location]}>{item.location}</Text>
          <Text>
            {faves?.includes(item.id) ? (
              <MaterialCommunityIcons name="heart" size={20} color="#cf392a" />
            ) : null}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  faves: PropTypes.array,
  sessions: PropTypes.array,
  navigation: PropTypes.object,
};

export default SessionListItem;
