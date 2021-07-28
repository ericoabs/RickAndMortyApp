import React from 'react';
import { View } from 'react-native';

import Like from 'react-native-vector-icons/AntDesign';

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
        <Like name="hearto" size={35} color="#1E2047" />
      </TextContainer>
    </Container>
  );
};
