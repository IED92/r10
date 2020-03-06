import React, {Component} from 'react';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import Schedule from './Schedule';
import {ALL_SESSIONS} from '../../config/queries';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';
import {formatSessionData} from './helpers/formatSessionData';

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
              console.log('schedule faveIds:', faveIds);
              if (data) {
                return (
                  <Schedule
                    sessionData={formatSessionData(data.allSessions)}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
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
