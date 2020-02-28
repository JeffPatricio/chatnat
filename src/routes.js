import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from './pages/Chat';
import EditProfile from './pages/EditProfile';
import HeaderMain from './components/HeaderMain';
const Stack = createStackNavigator();

const Routes = ({ perfil, setPerfil }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#5e35b1', height: 60 },
        headerBackTitleVisible: false,
        headerLayoutPreset: 'center',
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name='Chat'>{props => <Chat {...props} perfil={perfil} />}</Stack.Screen>
        <Stack.Screen name='EditProfile'>{props => <EditProfile {...props} perfil={perfil} setPerfil={setPerfil} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
