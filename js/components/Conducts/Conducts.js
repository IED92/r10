import React from 'react';
import {Text, View, TouchableOpacity, LayoutAnimation} from 'react-native';
// import styles from './styles';

class Conducts extends React.Component {
  state = {expanded: false};
  render() {
    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({expanded: !this.state.expanded});
          }}>
          <View>
            <Text>Press me to {this.state.expanded ? '-' : '+'}!</Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded && <Text>I disappear sometimes!</Text>}
      </View>
    );
  }
}

export default Conducts;
