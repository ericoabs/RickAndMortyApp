import React from 'react';
import { SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import { Main } from './src/pages/Main';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </ThemeProvider>
  );
};
