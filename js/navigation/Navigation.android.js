import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import AboutScreen from '../screens/About';
import MapsScreen from '../screens/Maps';
import FavesScreen from '../screens/Faves';
import {sharedScreenOptions, sharedBackOptions} from './config';

const ScheduleStack = createStackNavigator();
const ScheduleStackScreens = props => {
  return (
    <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
      <ScheduleStack.Screen
        style={{color: 'white'}}
        name="Schedule"
        component={ScheduleScreen}
      />
      <ScheduleStack.Screen
        name="Session"
        component={SessionScreen}
        options={sharedBackOptions}
      />
    </ScheduleStack.Navigator>
  );
};
const FavesStack = createStackNavigator();
const FavesStackScreens = props => {
  return (
    <FavesStack.Navigator screenOptions={sharedScreenOptions}>
      <FavesStack.Screen name="Schedule" component={FavesScreen} />
      <FavesStack.Screen name="Session" component={SessionScreen} />
    </FavesStack.Navigator>
  );
};
const AboutStack = createStackNavigator();
const AboutStackScreens = props => {
  return (
    <AboutStack.Navigator screenOptions={sharedScreenOptions}>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};
const MapStack = createStackNavigator();
const MapStackScreens = props => {
  return (
    <MapStack.Navigator screenOptions={sharedScreenOptions}>
      <MapStack.Screen name="Maps" component={MapsScreen} />
    </MapStack.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNav = props => (
  <Drawer.Navigator
    screenOptions={({route}) => ({
      drawerIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar' : 'calendar-blank-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart-outline' : 'heart';
        } else if (route.name === 'About') {
          iconName = focused ? 'information-outline' : 'information';
        } else if (route.name === 'Maps') {
          iconName = focused ? 'map-outline' : 'map';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}
    drawerContentOptions={{
      inactiveTintColor: '#999999',
      activeTintColor: '#9963ea',
      activeBackgroundColor: '#e6e6e6',
      labelStyle: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
      },
      style: {
        width: '100%',
        backgroundColor: '#ffffff',
      },
    }}>
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Maps" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FavesStackScreens} />
    <Drawer.Screen name="About" component={AboutStackScreens} />
  </Drawer.Navigator>
);

export default DrawerNav;
