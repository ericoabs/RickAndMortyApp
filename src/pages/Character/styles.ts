import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const TextContainer = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const TextView = styled.View`
  min-width: 200px;
  padding-right: 100px;
`;

export const CharacterImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.title};
  margin-right: 150px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text};
`;

export const Status = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.green};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 70px;

  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.buttonText};
`;

export const ArrowIcon = styled.TouchableHighlight`
  position: absolute;
  width: 60px;
  height: 60px;

  margin: 20px;

  border-radius: 999px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.darkBlue};
`;
