import React from 'react';
import Faves from './Faves';
import {FavesContext} from '../../context/FavesContext';

export default class FavesContainer extends React.Component {
  render() {
    return <Faves />;
  }
}
