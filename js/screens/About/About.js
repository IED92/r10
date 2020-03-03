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

class About extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.headerBox}>
            <Image
              style={styles.headerImage}
              source={require('../../assets/images/r10_logo.png')}
            />
          </View>
          <Text>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text>Date and Venue</Text>
          <Text>
            The R10 is a conference that will take place on December 8, 2019 in
            Vancouver, BC.
          </Text>
          <Text>Code if Conduct</Text>
          {/* TODO: */}
          {/* <Footer /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerBox: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey',
    padding: 10,
  },
  headerImage: {
    alignSelf: 'center',
    width: 180,
    height: 44,
  },
});

export default About;
