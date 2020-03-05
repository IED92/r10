import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const ScheduleListItem = ({faveIds, item, navigation}) => {
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
        {/* <Text>
          {faveIds.includes(item.id, 0) ? (
            <MaterialCommunityIcons name="heart" />
          ) : null}
        </Text> */}
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleListItem;
