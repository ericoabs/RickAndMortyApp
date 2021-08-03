import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { CharacterList } from '../pages/CharacterList';
import { Character } from '../pages/Character';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="CharacterList" component={CharacterList} />
    <Stack.Screen name="Character" component={Character} />
  </Stack.Navigator>
);

export default AppRoutes;
