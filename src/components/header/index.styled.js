import styled, { css } from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const MonthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
`;

export const YearContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  margin: 0;
  font-size: 14px;
  color: white;
`;

const arrowCSS = css`
  transition: all 0.5s;
  border: solid rgb(144, 144, 144);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    border-color: rgb(120, 120, 120);
  }
`;

export const ForwardArrow = styled.i`
  ${arrowCSS};

  transform: rotate(-45deg);
`;

export const BackArrow = styled.i`
  ${arrowCSS};
  transform: rotate(135deg);
`;
