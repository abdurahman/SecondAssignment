import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

const AboutScreen = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <Text>Name: Abdurahman Hussein Sid Ahmed</Text>
        <Text>Student Number: 101207567</Text>
        <Button
          title="Back Button"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </SafeAreaView>
    </>
  );
};

export {AboutScreen};
