import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  user-select: none;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    text-decoration: none;
    outline: none;
  }
`;

export const Label = styled.span``;
