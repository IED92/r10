import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './styles';

import Footer from '../../components/Footer';
import Conducts from '../../components/Conducts';
import {TouchableOpacity} from 'react-native-gesture-handler';

const About = ({conducts}) => {
  console.log(conducts);
  return (
    <View>
      <View style={styles.headerBox}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.topP}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.h1}>Date and Venue</Text>
        <Text style={styles.p}>
          The R10 is a conference that will take place on December 8, 2019 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h1}>Code if Conduct</Text>
        <Conducts title={conducts[0].title}>
          <Text>{conducts[0].description}</Text>
        </Conducts>
        {/* {conducts.map(conduct => (
          <View key={conduct.id}>
            <TouchableOpacity>
              <Text>{conduct.title}</Text>
            </TouchableOpacity>
            <Text>{conduct.description}</Text>
          </View>
        ))} */}
      </View>
      <Footer />
    </View>
  );
};

export default About;
