import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';

class Loader extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ActivityIndicator animating={true} size="small" color="black" />
      </SafeAreaView>
    );
  }
}

export default Loader;
