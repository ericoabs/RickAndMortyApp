import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { LikeProvider } from './src/hooks/useLike';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <LikeProvider>
          <Routes />
        </LikeProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
