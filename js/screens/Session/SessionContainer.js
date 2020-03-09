import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

export default class SessionContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({addFaveSession, getFavedSessionIds, removeFaveSession, faveIds}) => (
          <Session
            faveIds={faveIds}
            navigation={this.props.navigation}
            session={this.props.route.params.session}
            addFaveSession={addFaveSession}
            getFavedSessionIds={getFavedSessionIds}
            removeFaveSession={removeFaveSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}
