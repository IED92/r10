import React, {Component} from 'react';
import {queryFaves, deleteFave, createFave} from '../../config/models';
export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  addFaveSession = async sessionId => {
    try {
      const newFav = await createFave(sessionId);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newFav.id]});
      }
      this.getFavedSessionIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFaveSession = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionIds();
    } catch (error) {
      console.log(error);
    }
  };

  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const ids = faves.map(f => f[0]);
      this.setState({faveIds: ids});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
