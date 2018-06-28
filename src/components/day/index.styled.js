import styled from 'styled-components';

export const Main = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 25px;
  height: 25px;
  background-color: ${({ isSelectedDate, isHovered }) =>
    isHovered ? 'white' : isSelectedDate && 'rgb(16,122,148)'};
  border-radius: 50%;
  color: ${({ isHovered }) => (isHovered ? 'black' : 'white')};
  &:hover {
    cursor: ${({ isNotCurrentMonth }) =>
      isNotCurrentMonth ? 'default' : 'pointer'};
  }
`;
