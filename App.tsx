import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

// import { Main } from './src/pages/Main';
// import { Character } from './src/pages/Character';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};
