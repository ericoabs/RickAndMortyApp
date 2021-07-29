/* eslint-disable react-native/no-inline-styles */
import React from 'react';

// import { useNavigation } from '@react-navigation/core';

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

export const Character = ({ route, navigation }) => {
  // const navigation = useNavigation();

  const {
    itemName,
    itemSpecies,
    itemGender,
    itemImage,
    itemOrigin,
    itemStatus,
    itemLocation,
  } = route.params;

  return (
    <>
      <Container>
        <CharacterImage source={{ uri: itemImage }} />
        <TextContainer>
          <Name>{itemName}</Name>
          <Like name="hearto" size={35} color="#010102" />
        </TextContainer>
        <ArrowIcon onPress={() => navigation.navigate('Main')}>
          <Icon name="arrowleft" size={45} color="#fff" />
        </ArrowIcon>
        <TextContainer>
          <TextView>
            <CardTitle>Species:</CardTitle>
            <Description>{itemSpecies}</Description>
          </TextView>

          <TextView>
            <CardTitle>Gender:</CardTitle>
            <Description>{itemGender}</Description>
          </TextView>
        </TextContainer>

        <TextContainer style={{ flexDirection: 'column' }}>
          <CardTitle>Location:</CardTitle>
          <Description>{itemLocation}</Description>
        </TextContainer>

        <TextContainer>
          <TextView>
            <CardTitle>Origin:</CardTitle>
            <Description>{itemOrigin}</Description>
          </TextView>

          <TextView>
            <CardTitle>Status:</CardTitle>
            <Status>{itemStatus}</Status>
          </TextView>
        </TextContainer>
      </Container>
      <SearchButton>
        <ButtonText>Buscar no google</ButtonText>
      </SearchButton>
    </>
  );
};
