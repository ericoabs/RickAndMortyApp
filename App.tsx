import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>Olá</Text>
      </SafeAreaView>
    </ThemeProvider>

  );
};
