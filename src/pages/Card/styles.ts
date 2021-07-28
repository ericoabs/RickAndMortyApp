import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 170px;

  border-radius: 10px;

  margin-bottom: 15px;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const TextContainer = styled.View`
  margin-top: 5px;
  margin-left: 10px;
`;

export const CharacterImage = styled.Image`
  width: 160px;
  height: 170px;
`;

export const Name = styled.Text`
  font-size: 20;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  margin-bottom: 5px;
`;

export const CardTitle = styled.Text`
  font-size: 16;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Description = styled.Text`
  font-size: 16;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;
