/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { useNavigation } from '@react-navigation/core';

import Icon from 'react-native-vector-icons/AntDesign';
import Like from 'react-native-vector-icons/AntDesign';

import {
  Container,
  CharacterImage,
  Name,
  CardTitle,
  Description,
  TextContainer,
  TextView,
  Status,
  SearchButton,
  ButtonText,
  ArrowIcon,
} from './styles';

export const Character = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <CharacterImage
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
        <TextContainer>
          <Name>Rick Sanchez</Name>
          <Like name="hearto" size={35} color="#010102" />
        </TextContainer>
        <ArrowIcon onPress={() => navigation.navigate('Main')}>
          <Icon name="arrowleft" size={45} color="#fff" />
        </ArrowIcon>
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
      <SearchButton>
        <ButtonText>Buscar no google</ButtonText>
      </SearchButton>
    </>
  );
};
