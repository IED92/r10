import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';
import Conducts from '../../components/Conducts';
import {ScrollView} from 'react-native-gesture-handler';
import textStyles from '../../config/styles';
import PropTypes from 'prop-types';

const About = ({conducts}) => {
  return (
    <ScrollView>
      <View style={styles.headerBox}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View style={styles.container}>
        <Text style={textStyles}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={[textStyles, styles.h1]}>Date and Venue</Text>
        <Text style={textStyles}>
          The R10 is a conference that will take place on December 8, 2019 in
          Vancouver, BC.
        </Text>
        <Text style={[textStyles, styles.h1]}>Code if Conduct</Text>
        {conducts.map(conduct => (
          <Conducts
            key={conduct.id}
            title={conduct.title}
            description={conduct.description}
          />
        ))}
      </View>
      <Footer />
    </ScrollView>
  );
};

About.propTypes = {
  conducts: PropTypes.object,
};

export default About;
