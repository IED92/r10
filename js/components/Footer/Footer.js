import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from './styles';

class Footer extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.footerBox}>
        <Text> {'\u00A9'} Ian Doornbosch | Academy 2017</Text>
      </SafeAreaView>
    );
  }
}

export default Footer;
