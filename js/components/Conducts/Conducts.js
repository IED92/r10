import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
} from 'react-native';
import textStyles from '../../config/styles';
import styles from './styles';

class Conducts extends React.Component {
  constructor(props) {
    super(props);
    this.spinVal = new Animated.Value(0);
  }
  state = {
    expanded: false,
    title: this.props.title,
    description: this.props.description,
  };
  render() {
    return (
      <View key={this.props.id} style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({expanded: !this.state.expanded});
          }}>
          <View style={styles.conduct}>
            <Text style={styles.indicator}>
              {this.state.expanded ? '-' : '+'}
            </Text>
            <Text style={[textStyles, styles.indicator]}>
              {this.state.title}
            </Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded && (
          <Text style={[textStyles, styles.description]}>
            {this.state.description}
          </Text>
        )}
      </View>
    );
  }
}

export default Conducts;
