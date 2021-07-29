import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  /* padding: 0 20px; */

  position: relative;

  background-color: ${({ theme }) => theme.colors.gray};
`;

export const InputText = styled.TextInput`
  width: 100%;
  border-radius: 10px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const InputContainer = styled.View`
  flex: 1;
  width: 90%;
  height: 50px;

  border-radius: 10px;

  position: absolute;
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 0 30px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  align-self: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const CardContainer = styled.View`
  padding-top: 20px;
  position: relative;
  width: 90%;
`;
