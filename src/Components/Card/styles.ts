import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  min-height: 170px;
  max-height: 170px;

  border-radius: 10px;

  margin-top: 25px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const TextContainer = styled.View`
  margin-left: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 180px;
`;

export const CharacterImage = styled.Image`
  width: 140px;
  height: 170px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  margin-bottom: 5px;
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

export const LikeButton = styled.TouchableHighlight`
  justify-content: center;
  margin-right: 10px;
  margin-top: 120px;
`;
