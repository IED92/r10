import React from 'react';
import {Text, SafeAreaView, SectionList, View} from 'react-native';
import {Query} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import {ALL_SESSIONS} from '../../config/queries';

import styles from './styles';

const SessionList = () => {
  console.log(ALL_SESSIONS);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={ALL_SESSIONS}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default SessionList;
