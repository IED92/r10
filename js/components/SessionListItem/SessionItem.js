import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

const ScheduleListItem = ({item, navigation}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Session', {item});
      }}>
      <View>
        <Text>{item.location}</Text>
        <Text>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleListItem;
