import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import AboutScreen from '../screens/Session';
import MapsScreen from '../screens/Session';
import FavesScreen from '../screens/Faves';

const ScheduleStack = createStackNavigator();
const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Session" component={SessionScreen} />
    </ScheduleStack.Navigator>
  );
};
const FavesStack = createStackNavigator();
const FavesScreens = props => {
  return (
    <FavesStack.Navigator>
      <FavesStack.Screen name="Schedule" component={FavesScreen} />
      <FavesStack.Screen name="Session" component={SessionScreen} />
    </FavesStack.Navigator>
  );
};
const AboutStack = createStackNavigator();
const AboutScreens = props => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};
const MapStack = createStackNavigator();
const MapScreens = props => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Maps" component={MapsScreen} />
    </MapStack.Navigator>
  );
};

export default ScheduleStackScreens;
