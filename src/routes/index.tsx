import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from '../pages/Main';
import { Character } from '../pages/Character';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Character" component={Character} />
  </Stack.Navigator>
);

export default AppRoutes;
