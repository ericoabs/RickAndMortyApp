import React from "react";
import { View, Text } from 'react-native';

import { Container, Title, HeaderText } from './styles'

export const Header = () => {
  return (
    <Container>
      <Title>Listagem</Title>
      <HeaderText>Personagens</HeaderText>
    </Container>
  )
};
