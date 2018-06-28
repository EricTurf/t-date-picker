import styled, { css } from 'styled-components';

export const Main = styled.div`
  position: fixed;
  display: flex;
  top: 25px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ background }) => background};
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  margin-top: 15px;
  border-radius: 6px;

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
  }
`;

export const ChildContainer = styled.div`
  height: 250px;
`;

const bar = css`
  width: 250px;
`;

export const Header = styled.div`
  display: flex;
  ${bar};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

export const Footer = styled.div`
  ${bar};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`;
