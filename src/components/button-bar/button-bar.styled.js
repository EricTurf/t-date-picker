import styled from 'styled-components';

import { Button } from '../button';

export const StyledButton = styled(Button)`
  width: 110px;
  height: 30px;
  color: white;
  background-color: ${({ active }) =>
    active ? 'rgba(106, 120, 150, 1)' : 'rgba(139, 153, 184, 1)'};
`;

export const ButtonContainer = styled.div`
  display: flex;
  border: solid 1px rgba(120, 134, 165, 1);
  border-radius: 6px;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
