import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GradientHeader = props => (
  <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => {
  return (
    <MaterialCommunityIcons
      name="menu"
      color="black"
      size={25}
      style={{marginLeft: 20}}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export const sharedScreenOptions = props => ({
  headerBackTitleVisble: false,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerLeft: () => {
    return Platform.select({
      android: <MenuButton navigation={props.navigation} />,
      ios: null,
    });
  },
});

export const sharedBackOptions = ({navigation}) => ({
  headerLeft: () => (
    <MaterialCommunityIcons
      name="chevron-left"
      onPress={() => navigation.goBack()}
      title="Back"
      color="#fff"
      style={{marginLeft: 10}}
      size={35}
    />
  ),
});
