import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

const ScheduleListItem = ({item, navigation}) => {
  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => {
        navigation.navigate('Session', {item});
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleListItem;
