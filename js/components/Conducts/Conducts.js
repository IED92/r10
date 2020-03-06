import React from 'react';
import {Text, View, TouchableOpacity, LayoutAnimation} from 'react-native';
// import styles from './styles';

class Conducts extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    expanded: false,
    title: this.props.title,
    description: this.props.description,
  };
  render() {
    return (
      <View style={{overflow: 'hidden'}}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({expanded: !this.state.expanded});
          }}>
          <View>
            <Text>{this.state.title}</Text>
            <Text>{this.state.expanded ? '-' : '+'}</Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded && <Text>{this.state.description}</Text>}
      </View>
    );
  }
}

export default Conducts;
