import React, {Component} from 'react';
import {Text} from 'react-native';
import {Query} from '@apollo/react-components';
import About from './About';
import {ALL_CONDUCTS} from '../../config/queries';
import Loader from '../../components/Loader';

export default class AboutContainer extends Component {
  render() {
    return (
      <Query query={ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }
          if (error) {
            return <Text> Error </Text>;
          }
          if (data) {
            return (
              <About
                conducts={data.allConducts}
                navigation={this.props.navigation}
              />
            );
          }
        }}
      </Query>
    );
  }
}
