import React from 'react';
import { View } from 'react-native';

import {
  CharacterImage,
  Container,
  Description,
  Name,
  TextContainer,
  CardTitle,
} from './styles';

export const Card = () => {
  return (
    <Container>
      <View>
        <CharacterImage
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
      </View>
      <TextContainer>
        <Name>Rick Sanchez</Name>
        <CardTitle>Species:</CardTitle>
        <Description>Human</Description>
        <CardTitle>Origin:</CardTitle>
        <Description>Eart (C-137)</Description>
      </TextContainer>
    </Container>
  );
};
