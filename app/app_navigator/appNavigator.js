/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Platform} from 'react-native';
//Third Party libraries
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NoteList from '../screens/NoteLists';
import AddNote from '../screens/AddNotes';

// constants
const Stack = createStackNavigator();

const options = {
  headerShown: false,
  animation: 'slide_from_right',
  gestureEnabled: Platform.OS === 'android' ? false : true
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'NoteList'}>
        <Stack.Screen
          name={'NoteList'}
          component={NoteList}
          options={{
            title: 'My Notes App',
            gestureEnabled: Platform.OS === 'android' ? false : true,
            headerBackButtonMenuEnabled: true,
          }}
        />

        <Stack.Screen
          name={'AddNotes'}
          component={AddNote}
         options={{
            title: 'Add Notes',
            gestureEnabled: Platform.OS === 'android' ? false : true,
            headerBackButtonMenuEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}