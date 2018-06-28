import styled from 'styled-components';

import { Button } from '../button';

export const StyledButton = styled(Button)`
  width: 50%;
  height: 30px;
  color: white;
  background-color: none;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  &:hover {
    background-color: red;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
