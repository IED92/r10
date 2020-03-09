import React, {Component} from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends Component {
  render() {
    const {speaker} = this.props.route.params;
    return <Speaker navigation={this.props.navigation} speaker={speaker} />;
  }
}
export default SpeakerContainer;
