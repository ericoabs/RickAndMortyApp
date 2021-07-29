import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Main } from '../pages/Main';
import { Character } from '../pages/Character';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Character" component={Character} />
  </Stack.Navigator>
);

export default AppRoutes;
