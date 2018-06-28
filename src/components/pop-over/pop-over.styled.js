import styled, { css } from 'styled-components';

import { Button } from '../button';

export const Main = styled.div`
  position: fixed;
  display: flex;
  top: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(45, 51, 54);
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
    border-color: transparent transparent rgb(35, 41, 45) transparent;
  }
`;

const bar = css`
  width: 250px;
`;

export const CancelButton = styled(Button)`
  width: 50%;
  color: white;
  height: 100%;
  border-bottom-left-radius: 6px;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: rgb(60, 65, 65);
  }
`;

CancelButton.defaultProps = {
  label: 'Cancel'
};

export const ConfirmButton = styled(Button)`
  width: 50%;
  height: 100%;
  color: white;
  border-bottom-right-radius: 6px;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: rgb(60, 65, 65);
  }
`;

ConfirmButton.defaultProps = {
  label: 'Confirm'
};

export const Header = styled.div`
  display: flex;
  ${bar};
  margin-bottom: 30px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

export const Footer = styled.div`
  ${bar};
  display: flex;
  height: 50px;
  justify-content: space-around;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`;
