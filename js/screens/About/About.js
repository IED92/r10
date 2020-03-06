import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
import Conducts from '../../components/Conducts';

const About = ({conducts}) => {
  console.log(conducts[0].description);
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
        {conducts.map(conduct => (
          <Conducts title={conduct.title} description={conduct.description} />
        ))}
      </View>
      <Footer />
    </View>
  );
};

export default About;
