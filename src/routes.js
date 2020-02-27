import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './pages/SignUp';
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#5e35b1' },
        headerBackTitleVisible: false,
        headerLayoutPreset: 'center',
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
