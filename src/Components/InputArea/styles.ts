import styled from 'styled-components/native';

export const InputContainer = styled.View`
  flex: 1;
  width: 90%;
  height: 50px;

  border-radius: 10px;

  position: absolute;
  margin-top: 100px;
  margin-bottom: 20px;

  align-self: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;
