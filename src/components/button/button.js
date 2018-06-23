import React from 'react';

import { StyledButton, Label, Arrow } from './button.styled';

export default class Button extends React.Component {
  render() {
    const { className, label, onClick } = this.props;
    return (
      <StyledButton className={className} onClick={onClick}>
        {label && <Label>{label}</Label>}
      </StyledButton>
    );
  }
}
