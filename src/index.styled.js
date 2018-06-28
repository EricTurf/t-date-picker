import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: none;
  border-bottom: ${({ isOpen }) =>
    isOpen ? 'solid 1px black' : 'solid 1px transparent'};
  transition: all 0.3s;
  height: 20px;
  min-width: 250px;
  &:hover {
    cursor: pointer;
    border-bottom: solid 1px black;
  }
`;

export const Main = styled.div`
  position: relative;
`;

export const Value = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  margin: 1px;
`;
