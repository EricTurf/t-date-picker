import React from 'react';
import styled from 'styled-components';

export const DateField = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: none;
  border-bottom: ${({ isOpen }) =>
    isOpen ? 'solid 1px black' : 'solid 1px transparent'};
  transition: all 0.3s;
  height: 20%;
  width: 100%;

  &:hover {
    cursor: pointer;
    border-bottom: solid 1px black;
  }
`;

export const Main = styled.div`
  position: relative;
  width: 250px;
  height: 20px;
`;

export const Value = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  margin: 1px;
`;

export const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);
