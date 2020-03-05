import React from 'react';
import {Text, SectionList, ScrollView, View} from 'react-native';
import SessionListItem from '../SessionListItem';
import moment from 'moment';

const SessionList = ({allSessions, navigation}) => {
  console.log(allSessions);
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default SessionList;
