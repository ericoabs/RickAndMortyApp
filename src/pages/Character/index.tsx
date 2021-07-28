/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Container,
  CharacterImage,
  Name,
  CardTitle,
  Description,
  TextContainer,
  TextView,
  Status,
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
        <TextView>
          <CardTitle>Species:</CardTitle>
          <Description>Human</Description>
        </TextView>

        <TextView>
          <CardTitle>Gender:</CardTitle>
          <Description>Male</Description>
        </TextView>
      </TextContainer>

      <TextContainer style={{ flexDirection: 'column' }}>
        <CardTitle>Location:</CardTitle>
        <Description>Eart (Replacement Dimension)</Description>
      </TextContainer>

      <TextContainer>
        <TextView>
          <CardTitle>Origin:</CardTitle>
          <Description>Eart (C-137)</Description>
        </TextView>

        <TextView>
          <CardTitle>Status:</CardTitle>
          <Status>Alive</Status>
        </TextView>
      </TextContainer>
    </Container>
  );
};
