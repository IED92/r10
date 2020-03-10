import React from 'react';
import {Text, SectionList, ScrollView, View} from 'react-native';
import SessionListItem from '../SessionListItem';
import styles from './styles';
import moment from 'moment';
import textStyles from '../../config/styles';
import PropTypes from 'prop-types';

const SessionList = ({faves, sessions, navigation}) => {
  return (
    <ScrollView>
      <SectionList
        sections={sessions}
        keyExtractor={session => session.id}
        renderItem={({item}) => (
          <SessionListItem faves={faves} item={item} navigation={navigation} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.header}>
            <Text style={textStyles}>{moment(title).format('h:mm A')}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

SessionList.propTypes = {
  faves: PropTypes.array,
  sessions: PropTypes.array,
  navigation: PropTypes.object,
};

export default SessionList;
