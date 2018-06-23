import styled, { css } from 'styled-components';

export const Main = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 6px;
  background-color: ${({ background }) => background};
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 350px;
  margin-top: 15px;

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
    border-color: transparent transparent rgba(139, 153, 184, 1) transparent;
    order: 10;
  }
`;

export const ChildContainer = styled.div`
  height: 250px;
`;

const bar = css`
  width: 100%;

  height: 50px;
  background-color: rgba(139, 153, 184, 1);
`;

export const Header = styled.div`
  ${bar};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const Footer = styled.div`
  ${bar};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
