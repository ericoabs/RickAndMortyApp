import React from 'react';

import { Container, Title, HeaderText } from './styles';

interface HeaderProps {
  numberOfCharacters: number;
}

export const Header: React.FC<HeaderProps> = ({ numberOfCharacters }) => {
  return (
    <Container>
      <Title>Listagem</Title>
      <HeaderText>{numberOfCharacters} Personagens</HeaderText>
    </Container>
  );
};
