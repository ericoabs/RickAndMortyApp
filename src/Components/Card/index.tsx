import React from 'react';
import { View } from 'react-native';

import Like from 'react-native-vector-icons/AntDesign';
import { useLike } from '../../hooks/useLike';

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
  const { isLiked, setIsLiked } = useLike();

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
      <LikeButton onPress={() => setIsLiked(!isLiked)}>
        {isLiked ? (
          <Like name="hearto" size={35} color="#aa0000" />
        ) : (
          <Like name="hearto" size={35} color="#010102" />
        )}
      </LikeButton>
    </Container>
  );
};
