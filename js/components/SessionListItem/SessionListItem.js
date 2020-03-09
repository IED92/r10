import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const SessionListItem = ({faves, item, navigation}) => {
  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => {
        navigation.navigate('Session', {
          session: item,
        });
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.location}>
          <Text style={styles.location}>{item.location}</Text>
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

export default SessionListItem;
