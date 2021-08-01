import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { CardContainer, Container, InputText, InputContainer } from './styles';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { CharacterType } from '../../Components/Card';
// import { useLike } from '../../hooks/useLike';
import { useCallback } from 'react';

export const Main = ({ navigation }) => {
  const [characterList, setCharacterList] = useState<CharacterType[]>([]);
  const [filteredCharacterList, setFilteredCharacterList] = useState<
    CharacterType[]
  >([]);
  const [pageCount, setPageCount] = useState(1);
  // const { isLiked, setIsLiked } = useLike();

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    (async function dataFetch() {
      await fetch(`https://rickandmortyapi.com/api/character?page=${pageCount}`)
        .then((response) => response.json())
        .then((data) =>
          setCharacterList((prevState) => [...prevState, ...data.results]),
        );
      // setIsLoading(false);
    })();
  }, [pageCount]);

  const handleTextChange = useCallback(
    (name: string) => {
      setFilteredCharacterList(
        characterList.filter((character) =>
          character.name.toLowerCase().includes(name.toLowerCase()),
        ),
      );
      console.log(filteredCharacterList);
    },
    [characterList, filteredCharacterList],
  );

  return (
    <>
      <Container>
        <Header
          numberOfCharacters={
            filteredCharacterList.length > 0
              ? filteredCharacterList.length
              : characterList.length
          }
        />
        <InputContainer>
          <Icon name="search1" size={28} color="#000" />
          <InputText
            placeholder="Busque por um personagem"
            onChangeText={handleTextChange}
          />
        </InputContainer>
        <CardContainer>
          <FlatList
            data={
              filteredCharacterList.length > 0
                ? filteredCharacterList
                : characterList
            }
            keyExtractor={(item) => String(item.id)}
            onEndReached={() => {
              setPageCount(pageCount + 1);
            }}
            ListEmptyComponent={ActivityIndicator}
            renderItem={({ item }: { item: CharacterType }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('Character', {
                      itemName: item.name,
                      itemSpecies: item.species,
                      itemGender: item.gender,
                      itemImage: item.image,
                      itemOrigin: item.origin.name,
                      itemLocation: item.location.name,
                      itemStatus: item.status,
                    })
                  }
                >
                  <Card
                    id={item.id}
                    name={item.name}
                    species={item.species}
                    image={item.image}
                    origin={item.origin.name}
                    gender={item.gender}
                    location={item.location.name}
                    status={item.status}
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
