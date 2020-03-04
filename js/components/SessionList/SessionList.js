import React from 'react';
import {Text, SafeAreaView, SectionList, View} from 'react-native';
import {Query} from '@apollo/react-components';
import {ALL_SESSIONS} from '../../config/queries';
import Loader from '../Loader';

import styles from './styles';

const ListItem = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const SessionList = () => {
  <Query query={ALL_SESSIONS}>
    {({loading, error, data}) => {
      if (loading) {
        return <Loader />;
      }
      if (error) {
        return <p>Error</p>;
      }
      return;
    }}
  </Query>;
};

export default SessionList;
