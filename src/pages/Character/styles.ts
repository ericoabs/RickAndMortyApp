import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const TextContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  margin-right: 30px;
`;

export const CharacterImage = styled.Image`
  width: 100%;
  height: 400px;
`;

export const Name = styled.Text`
  padding: 30px 20px;

  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.title};
`;

export const CardTitle = styled.Text``;

export const Description = styled.Text``;

export const Status = styled.Text``;
