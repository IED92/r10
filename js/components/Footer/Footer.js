import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import textStyles from '../../config/styles';
import styles from './styles';

class Footer extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.footerBox}>
        <Text style={[textStyles, styles.text]}>
          {'\u00A9'} Ian Doornbosch | RED Academy 2020
        </Text>
      </SafeAreaView>
    );
  }
}

export default Footer;
