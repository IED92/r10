import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const SessionListItem = ({faves, item, navigation}) => {
  console.log('faves:', faves);
  console.log(item);

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
        <Text style={styles.location}>{item.location}</Text>
        <Text>
          {faves?.includes(item.id) ? (
            <MaterialCommunityIcons name="heart" />
          ) : null}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default SessionListItem;
