import React, { useEffect, useState, useCallback } from 'react';
import api from '../../api/api';
import 'react-native-gesture-handler';

import { Formik } from 'formik';

import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {
  CardContainer,
  Container,
  InputText,
  InputContainer,
  SearchButton,
} from './styles';

import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { CharacterType } from '../../Components/Card';

export const CharacterList = ({ navigation }) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [nextPage, setNextPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  console.log(characterCount);

  const [characterList, setCharacterList] = useState<CharacterType[]>([]);

  const handleSearch = useCallback(async (values) => {
    const { data } = await api.get(`/character/?page=1&name=${values.name}`);
    setCharacterList(data.results);
    setCharacterCount(data.info.count);
    setNextPage(data.info.next);
  }, []);

  async function fetchMore() {
    const { data } = await api.get(nextPage);
    setCharacterList((prevState) => [...prevState, ...data.results]);
    setCharacterCount(data.info.count);
    setNextPage(data.info.next);
  }

  useEffect(() => {
    setIsLoading(true);
    (async function dataFetch() {
      await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
          setCharacterList((prevState) => [...prevState, ...data.results]);
          setNextPage(data.info.next);
          setCharacterCount(data.info.count);
        });
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <>
        <Container>
          <Header numberOfCharacters={0} />

          <ActivityIndicator size="large" color="#00aaff" />
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Header numberOfCharacters={characterCount} />
        <Formik initialValues={{ name: '' }} onSubmit={handleSearch}>
          {({ handleChange, handleSubmit, values }) => (
            <InputContainer>
              <SearchButton onPress={handleSubmit}>
                <Icon name="search1" size={28} color="#000" />
              </SearchButton>
              <InputText
                placeholder="Busque por um personagem"
                onChangeText={handleChange('name')}
                value={values.name}
              />
            </InputContainer>
          )}
        </Formik>
        <CardContainer>
          <FlatList
            data={characterList}
            keyExtractor={(item) => String(item.id)}
            onEndReached={() => {
              characterList.length > 0 ? fetchMore() : <ActivityIndicator />;
            }}
            ListEmptyComponent={ActivityIndicator}
            renderItem={({ item }: { item: CharacterType }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.push('Character', {
                      itemId: item.id,
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
                    like={false}
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
