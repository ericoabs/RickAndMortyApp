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
  flex: 1;

  width: 90%;

  margin-top: 100px;
  position: absolute;

  border-radius: 10px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

export const CardContainer = styled.View`
  padding-top: 20px;
  position: relative;
  width: 90%;
`;
