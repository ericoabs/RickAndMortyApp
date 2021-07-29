import React, { useEffect, useState } from 'react';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { InputArea } from '../../Components/InputArea';

import { CardContainer, Container, InputText } from './styles';

import { CharacterType } from '../../Components/Card';
import { FlatList } from 'react-native';

export const Main: React.FC = () => {
  const [characterList, setCharacterList] = useState<CharacterType[]>([]);

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
        {/* <InputArea /> */}
        <InputText placeholder="Busque por um personagem" />
        <CardContainer>
          <FlatList
            data={characterList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }: { item: CharacterType }) => {
              return (
                <Card
                  id={item.id}
                  name={item.name}
                  species={item.species}
                  image={item.image}
                  origin={item.origin.name}
                />
              );
            }}
          />
        </CardContainer>
      </Container>
    </>
  );
};
