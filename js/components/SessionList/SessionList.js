import React from 'react';
import {Text, SafeAreaView, SectionList, View} from 'react-native';
import {ALL_SESSIONS} from '../../config/queries';

import styles from './styles';
import {useQuery} from '@apollo/react-hooks';
import {formatSessionData} from './helpers/formatSessionData';

// const ListItem = ({title}) => {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// };

const SessionList = () => {
  // const {loading, error, data} = useQuery(ALL_SESSIONS);
  // if (loading) {
  return <Text> SessionList </Text>;
  //     <View>
  //       <Text>success</Text>
  //     </View>
  //   );
  // }
  // if (error) {
  //   return (
  //     <View>
  //       <Text>error</Text>
  //     </View>
  //   );
  // }
  // if (data) {
  //   const allSessions = formatSessionData(data.allSessions);
  //   console.log(allSessions);
  // }
};

export default SessionList;
