import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './styles';

class Loader extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator
          style={styles.indicator}
          animating={true}
          size="large"
          color="black"
        />
      </SafeAreaView>
    );
  }
}

export default Loader;
