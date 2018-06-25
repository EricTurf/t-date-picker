import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
`;

export const List = styled.div`
  width: 55px;
  height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: red;
`;
