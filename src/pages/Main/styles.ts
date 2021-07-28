import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.gray};
`;
