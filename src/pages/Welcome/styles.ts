import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
`;

export const ImageBg = styled.ImageBackground`
  flex: 1;

  justify-content: flex-end;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 60px;

  border-radius: 10px;

  margin-bottom: 60px;

  align-items: center;

  justify-content: center;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const AdvanceButton = styled.TouchableHighlight`
  width: 90%;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-top: 3px;
  margin-right: 10px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.white};
`;
