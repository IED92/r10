import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import SessionList from '../../components/SessionList/SessionList';

const Schedule = ({faveIds, sessionData, navigation}) => {
  return (
    <View>
      {sessionData.length !== 0 && (
        <SessionList
          faves={faveIds}
          sessions={sessionData}
          navigation={navigation}
        />
      )}
    </View>
  );
};

Schedule.propTypes = {
  faveIds: PropTypes.array,
  sessionData: PropTypes.array,
  navigation: PropTypes.object,
};

export default Schedule;
