import styled from 'styled-components/native';

export const InputContainer = styled.View`
  flex: 1;
  width: 90%;
  height: 50px;

  border-radius: 10px;

  position: absolute;
  z-index: 100;
  padding-left: 5px;
  margin-top: 100px;
  margin-bottom: 20px;

  align-self: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;
