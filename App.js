import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from './screens/MainScreen';
import {AboutScreen} from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Main">
            <Tab.Screen
              name="Main"
              component={MainScreen}
              options={{title: 'Main Screen'}}
            />
            <Tab.Screen
              name="About"
              component={AboutScreen}
              options={{title: 'About Screen'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
