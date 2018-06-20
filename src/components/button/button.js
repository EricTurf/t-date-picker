import React from 'react';

import { StyledButton, Label, Arrow } from './button.styled';

export default class Button extends React.Component {
  render() {
    const { className, label } = this.props;
    return (
      <StyledButton className={className}>
        {label && <Label>{label}</Label>}
      </StyledButton>
    );
  }
}
