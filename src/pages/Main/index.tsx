import React from 'react';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { InputArea } from '../../Components/InputArea';

import { Container } from './styles';

export const Main = () => {
  return (
    <>
      <Header />
      <InputArea />
      <Container>
        <Card />
        <Card />
        {/* <Card />
        <Card /> */}
      </Container>
    </>
  );
};
