import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.gray};
`;
