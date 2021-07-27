import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 125px;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Title = styled.Text`
  margin-top: 38px;
  margin-left: 23px;

  font-size: 20px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderText = styled.Text`
  margin-top: 40px;
  margin-right: 15px;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray};
`;
