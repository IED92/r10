import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import textStyles from '../../config/styles';
import styles from './styles';

const CustomButton = props => {
  return (
    <LinearGradient
      colors={['#9963ea', '#8797D6']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={styles.linearGradient}>
      <Text style={[textStyles, styles.buttonText]}>{props.children}</Text>
    </LinearGradient>
  );
};

export default CustomButton;
