import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import styles from './styles';

class Footer extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.footerBox}>
            <Text> {'\u00A9'} RED Academy 2017</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Footer;
