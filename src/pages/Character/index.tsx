/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { useEffect } from 'react';

export const Character = ({ route, navigation }) => {
  const [isLiked, setIsliked] = useState(false);

  const {
    itemId,
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

  const dataKey = '@RickAndMortyApp:likes';

  const handleLike = useCallback(async () => {
    const characterLike = itemId;
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormated = [...currentData, characterLike];

      if (currentData.includes(itemId)) {
        await AsyncStorage.removeItem(dataKey);
      } else {
        await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));
      }
    } catch (error) {
      console.log(error);
    }
  }, [itemId]);

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      if (currentData.includes(itemId)) {
        setIsliked(true);
      }
    }

    loadData();
    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataKey);
    // }
    // removeAll();
  });

  return (
    <>
      <Container>
        <CharacterImage source={{ uri: itemImage }} />
        <TextContainer>
          <Name>{itemName}</Name>
          <LikeButton onPress={handleLike}>
            {isLiked ? (
              <Like name="heart" size={35} color="#1E2047" />
            ) : (
              <Like name="hearto" size={35} color="#010102" />
            )}
          </LikeButton>
        </TextContainer>
        <ArrowIcon onPress={() => navigation.navigate('CharacterList')}>
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
