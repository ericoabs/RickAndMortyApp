import styled from 'styled-components/native';

export const Container = styled.View`
  height: 170px;

  border-radius: 10px;

  margin-top: 25px;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const TextContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
  width: 160px;
`;

export const CharacterImage = styled.Image`
  width: 140px;
  height: 170px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Name = styled.Text`
  margin-bottom: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const LikeButton = styled.TouchableOpacity`
  align-items: flex-end;
  justify-content: center;
  margin-right: 10px;
  margin-top: 120px;
`;
