import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

import {
  ButtonContainer,
  Container,
  ImageBg,
  AdvanceButton,
  ButtonText,
  Logo,
} from './styles';

export const Welcome = ({ navigation }) => {
  return (
    <Container>
      <ImageBg source={require('../../assets/wallpaper.png')}>
        <Logo source={require('../../assets/logo.png')} />
        <AdvanceButton onPress={() => navigation.navigate('CharacterList')}>
          <ButtonContainer>
            <ButtonText>Prosseguir</ButtonText>
            <Icon name="arrowright" size={28} color="#fff" />
          </ButtonContainer>
        </AdvanceButton>
      </ImageBg>
    </Container>
  );
};
