import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

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

const styles = StyleSheet.create({
  footerBox: {
    alignSelf: 'flex-end',
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: 'lightgrey',
    padding: 20,
  },
});

export default Footer;
