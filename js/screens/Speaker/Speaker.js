import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import textStyles from '../../config/styles';
import PropTypes from 'prop-types';

const Speaker = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <MaterialCommunityIcons name="close" color="white" size={25} />
        </TouchableOpacity>
        <Text style={[textStyles, styles.whttext]}>About the Speaker</Text>
      </View>
      <ScrollView style={styles.card}>
        <View style={styles.content}>
          <Image
            style={styles.profilepic}
            source={{uri: props.speaker.image}}
          />
          <Text style={[textStyles, styles.name]}>{props.speaker.name}</Text>
          <Text style={[textStyles, styles.bio]}>{props.speaker.bio}</Text>
          <TouchableOpacity
            style={styles.favebutton}
            onPress={() => {
              Linking.openURL(props.speaker.url);
            }}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={styles.linearGradient}>
              <Text style={[textStyles, styles.buttonText]}>
                Read More on Wikipedia
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propType = {
  speaker: PropTypes.object,
  navigation: PropTypes.object,
};

export default Speaker;
