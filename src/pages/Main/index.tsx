import React, { useEffect, useState } from 'react';
import api from '../../api/api';

import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { CardContainer, Container, InputText, InputContainer } from './styles';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { CharacterType } from '../../Components/Card';
import { useCallback } from 'react';

export const Main = ({ navigation }) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const [characterList, setCharacterList] = useState<CharacterType[]>([]);
  const [filteredCharacterList, setFilteredCharacterList] = useState<
    CharacterType[]
  >([]);

  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // setIsLoading(true);
  //   (async function dataFetch() {
  //     await fetch(`https://rickandmortyapi.com/api/character?page=${pageCount}`)
  //       .then((response) => response.json())
  //       .then((data) => setDataFetch(data));
  //     setCharacterList((prevState) => [...prevState, ...dataFetch.results]),
  //     // setIsLoading(false);
  //   })();
  // }, [pageCount]);

  // const handleTextChange = useCallback(
  //   (name: string) => {
  //     setFilteredCharacterList(
  //       characterList.filter((character) =>
  //         character.name.toLowerCase().includes(name.toLowerCase()),
  //       ),
  //     );
  //     console.log(filteredCharacterList);
  //   },
  //   [characterList, filteredCharacterList],
  // );

  useEffect(() => {
    (async function dataFetch() {
      const { data } = await api.get(`/character/?page=${pageCount}`);
      setCharacterList((prevState) => [...prevState, ...data.results]);
      setCharacterCount(data.info.count);
    })();
  }, [pageCount]);

  return (
    <>
      <Container>
        <Header numberOfCharacters={characterCount} />
        <InputContainer>
          <Icon name="search1" size={28} color="#000" />
          <InputText placeholder="Busque por um personagem" />
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
