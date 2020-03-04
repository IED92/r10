import React from 'react';
import {Text, SectionList, View} from 'react-native';
import SessionListItem from '.';
import moment from 'moment';

const SessionList = ({allSessions, navigation}) => {
  console.log(allSessions);
  return (
    <View>
      <SectionList
        sections={allSessions}
        keyExtractor={session => session.id}
        renderItem={({item}) => (
          <SessionListItem item={item} navigation={navigation} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text>{moment(title).format('h:mm A')}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SessionList;
