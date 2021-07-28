import React from 'react';
import { View } from 'react-native';

import {
  Container,
  CharacterImage,
  Name,
  CardTitle,
  Description,
  TextContainer,
} from './styles';

export const Character = () => {
  return (
    <Container>
      <CharacterImage
        source={{
          uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        }}
      />
      <Name>Rick Sanchez</Name>

      <TextContainer>
        <View>
          <CardTitle>Species:</CardTitle>
          <Description>Human</Description>
        </View>

        <View>
          <CardTitle>Gender:</CardTitle>
          <Description>Male</Description>
        </View>
      </TextContainer>

      <CardTitle>Origin:</CardTitle>
      <Description>Eart (C-137)</Description>

      <TextContainer>
        <View>
          <CardTitle>Origin:</CardTitle>
          <Description>Eart (C-137)</Description>
        </View>

        <View>
          <Description>Alive</Description>
          <CardTitle>Status:</CardTitle>
        </View>
      </TextContainer>
    </Container>
  );
};
