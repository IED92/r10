import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import BottomTabNavScreens from './BottomTabNav';

const RootStack = createStackNavigator();
const RootStackScreens = props => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      //   options={{header: false}}
      name="BottomTab"
      component={BottomTabNavScreens}
    />
  </RootStack.Navigator>
);
export default RootStackScreens;
