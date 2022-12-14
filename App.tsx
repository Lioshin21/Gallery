import * as React from 'react';
import {StyleSheet} from 'react-native';
// Screens
import ShowPhoto from './src/screens/ShowPhoto';
import Gallery from './src/screens/Gallery';
// Redux
import {Provider} from 'react-redux';
import store from './src/store/store';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen
              name="ShowPhoto"
              component={ShowPhoto}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({});

export type RootStackParamList = {
  Gallery: undefined;
  ShowPhoto: {fullPhoto: string | undefined};
};

export type ShowPhotoProps = NativeStackScreenProps<
  RootStackParamList,
  'ShowPhoto'
>;

export default App;
