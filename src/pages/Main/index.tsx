import React from 'react';

import { Header } from '../Header';
import { Card } from '../Card';

import { Container } from './styles';

export const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
};
