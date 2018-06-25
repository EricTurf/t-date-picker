import styled, { css } from 'styled-components';
import { Button } from '../button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  width: 100%;
`;

const TIME_BUTTON_COLORS = {
  active: 'rgba(0, 217, 198,1)',
  normal: 'rgba(97, 104, 143,1)'
};

const buttonCss = css`
  height: 30px;
  width: 40px;

  font-weight: bold;
`;
export const AMButton = styled(Button)`
  background-color: ${({ active }) =>
    active ? TIME_BUTTON_COLORS.active : TIME_BUTTON_COLORS.normal};
  ${buttonCss};
`;
export const PMButton = styled(Button)`
  background-color: ${({ active }) =>
    active ? TIME_BUTTON_COLORS.active : TIME_BUTTON_COLORS.normal};
  ${buttonCss};
`;
export const ButtonContainer = styled.div`
  display: flex;
  border-radius: 4px;

  overflow: hidden;
`;

export const Time = styled.input`
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;

  border-radius: 3px;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff, 0 1px 0 #fff;

  &:focus {
    text-decoration: none;
    outline: none;
    border: 1px solid orange;
  }
`;
export const TimeContainer = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

export const Colon = styled.div`
  position: relative;
  margin-top: 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
  &:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.15);
    bottom: -15px;
  }
`;
