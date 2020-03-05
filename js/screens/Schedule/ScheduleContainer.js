import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Query} from '@apollo/react-components';
import Schedule from './Schedule';
import {ALL_SESSIONS} from '../../config/queries';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';
import {formatSessionData} from './helpers/formatSessionData';
import {ScrollView} from 'react-native-gesture-handler';

// const formattedSData = formatSessionData(data.allSessions);

export default class ScheduleContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({faveIds}) => (
          <Query query={ALL_SESSIONS}>
            {({loading, error, data}) => {
              if (loading) {
                return <Loader />;
              }
              if (error) {
                return <Text> Error </Text>;
              }
              if (data) {
                return (
                  <Schedule
                    sessionData={formatSessionData(data.allSessions)}
                    faveIds={faveIds}
                  />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

// class ScheduleContainer extends Component {
//   render() {
//     const {loading, error, data} = useQuery(ALL_SESSIONS);
//     if (loading) {
//       return (
//         <View>
//           <Loader />
//         </View>
//       );
//     }
//     if (error) {
//       return (
//         <View>
//           <Text>Error </Text>
//         </View>
//       );
//     }
//     if (data) {
//       return (
//         <FavesContext.Consumer>
//           {({faveIds}) => (
//             <Schedule
//               sessionData={formatSessionData(data.allSessions)}
//               faveIds={faveIds}
//             />
//           )}
//         </FavesContext.Consumer>
//       );
//     }
//   }
// }
