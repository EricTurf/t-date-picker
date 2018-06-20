import React from 'react';

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
`;

export const YearContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Header = styled.h2`
  margin: 0;
`;

const arrowCSS = css`
  transition: all 0.5s;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    border-color: red;
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
