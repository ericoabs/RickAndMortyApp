import React, { useCallback, useEffect } from 'react';

import { useState } from 'react';
import { View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Like from 'react-native-vector-icons/AntDesign';
import {
  CharacterImage,
  Container,
  Description,
  Name,
  TextContainer,
  CardTitle,
  LikeButton,
} from './styles';

export interface CharacterType {
  id: number;
  name: string;
  species: string;
  image: string;
  origin: any;
  gender: string;
  status: string;
  location: any;
  like: boolean;
}

export const Card: React.FC<CharacterType> = ({
  id,
  name,
  image,
  species,
  origin,
}) => {
  const dataKey = '@RickAndMortyApp:likes';

  const [isLiked, setIsliked] = useState(false);
  const [refreshPage, setRefreshPage] = useState('');

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      if (currentData.includes(id)) {
        setIsliked(true);
      }
    }
    loadData();
  }, [id, isLiked, name, refreshPage]);

  const handleLike = useCallback(async () => {
    const characterLike = id;
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormated = [...currentData, characterLike];

      if (currentData.includes(id)) {
        currentData.splice(currentData.indexOf(id), 1);
        await AsyncStorage.setItem(dataKey, JSON.stringify(currentData));
        setIsliked(!isLiked);
        setRefreshPage('Refresh');
      } else {
        setIsliked(!isLiked);
        await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));
      }
    } catch (error) {
      console.log(error);
    }
    console.log('cheguei');
    setRefreshPage('Refresh');
  }, [id, isLiked]);

  return (
    <Container>
      <View>
        <CharacterImage source={{ uri: image }} />
      </View>
      <TextContainer>
        <Name>{name}</Name>
        <CardTitle>Species:</CardTitle>
        <Description>{species}</Description>
        <CardTitle>Origin:</CardTitle>
        <Description>{origin}</Description>
      </TextContainer>
      <LikeButton onPress={handleLike}>
        {isLiked ? (
          <Like name="heart" size={35} color="#1E2047" />
        ) : (
          <Like name="hearto" size={35} color="#010102" />
        )}
      </LikeButton>
    </Container>
  );
};
