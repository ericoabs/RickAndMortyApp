import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { CardContainer, Container, InputText, InputContainer } from './styles';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { CharacterType } from '../../Components/Card';

import { useNavigation } from '@react-navigation/core';

export const Main: React.FC = () => {
  const [characterList, setCharacterList] = useState<CharacterType[]>([]);

  const navigation = useNavigation();

  async function dataFetch() {
    await fetch('https://rickandmortyapi.com/api/character?page=1')
      .then((response) => response.json())
      .then((data) => setCharacterList(data.results));
  }

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <Container>
        <Header numberOfCharacters={characterList.length} />
        <InputContainer>
          <Icon name="search1" size={28} color="#000" />
          <InputText placeholder="Busque por um personagem" />
        </InputContainer>
        <CardContainer>
          <FlatList
            data={characterList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }: { item: CharacterType }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Character')}
                >
                  <Card
                    id={item.id}
                    name={item.name}
                    species={item.species}
                    image={item.image}
                    origin={item.origin.name}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </CardContainer>
      </Container>
    </>
  );
};
