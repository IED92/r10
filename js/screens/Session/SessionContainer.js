import React, {Component} from 'react';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import Session from './Session';
import {ALL_SESSIONS} from '../../config/queries';
import Loader from '../../components/Loader';
import {FavesContext} from '../../context/FavesContext';

export default class SessionContainer extends Component {
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
                return <Session />;
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
