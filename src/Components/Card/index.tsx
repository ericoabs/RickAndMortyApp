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
}

export const Card: React.FC<CharacterType> = ({
  name,
  image,
  species,
  origin,
}) => {
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
      <LikeButton>
        <Like name="hearto" size={30} color="#1E2047" />
      </LikeButton>
    </Container>
  );
};
