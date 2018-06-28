import styled from 'styled-components';

import { Dropdown } from '../dropdown';

export const Main = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const MonthDropdown = styled(Dropdown)`
  width: 160px;
  border-top-left-radius: 6px;
  background-color: rgb(35, 41, 45);
`;
