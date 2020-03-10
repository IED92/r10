import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import SessionList from '../../components/SessionList/SessionList';
import PropTypes from 'prop-types';

const Faves = ({sessions, faves, navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SessionList
          sessions={sessions}
          faves={faves}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

Faves.propTypes = {
  sessions: PropTypes.object,
  faves: PropTypes.object,
  navigation: PropTypes.object,
};

export default Faves;
