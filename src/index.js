import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Welcome} from './screens/welcome';
import {Home} from './screens/home';
import {useAuthState} from './contexts';
import {navigationRef} from './RootNavigation';

const navigationOptions = {
  headerStyle: {
    backgroundColor: 'green',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export const SwitchNavigation = () => {
  const Stack = createStackNavigator();
  const user = useAuthState();

  console.log(`User: ${JSON.stringify(user)}`);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="green" barStyle="default" />
      <Stack.Navigator screenOptions={navigationOptions}>
        {user.isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Welcome" component={Welcome} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
