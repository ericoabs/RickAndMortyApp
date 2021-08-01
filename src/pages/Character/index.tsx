/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Linking } from 'react-native';

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
  LikeButton,
} from './styles';

export const Character = ({ route, navigation }) => {
  const {
    itemName,
    itemSpecies,
    itemGender,
    itemImage,
    itemOrigin,
    itemStatus,
    itemLocation,
  } = route.params;

  const handlePress = () => {
    Linking.openURL(
      `https://www.google.com/search?q=${itemName.replace(
        ' ',
        '+',
      )}+Rick+and+Morty`,
    );
  };

  return (
    <>
      <Container>
        <CharacterImage source={{ uri: itemImage }} />
        <TextContainer>
          <Name>{itemName}</Name>
          <LikeButton>
            <Like name="hearto" size={35} color="#010102" />
          </LikeButton>
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
            <Status status={itemStatus}>{itemStatus}</Status>
          </TextView>
        </TextContainer>
        <SearchButton onPress={handlePress}>
          <ButtonText>Buscar no google</ButtonText>
        </SearchButton>
      </Container>
    </>
  );
};
