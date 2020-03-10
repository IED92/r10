import React from 'react';
import Faves from './Faves';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import {ALL_SESSIONS} from '../../config/queries';
import Loader from '../../components/Loader';
import {formatSessionData} from '../Schedule/helpers/formatSessionData';

import {FavesContext} from '../../context/FavesContext';

export default class FavesContainer extends React.Component {
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
              const favedSessions = data.allSessions.filter(session =>
                faveIds.includes(session.id),
              );
              if (data) {
                return (
                  <Faves
                    faves={faveIds}
                    sessions={formatSessionData(favedSessions)}
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
