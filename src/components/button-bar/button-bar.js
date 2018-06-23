import React from 'react';

import { Main, StyledButton, ButtonContainer } from './button-bar.styled';

export default class ButtonBar extends React.Component {
  static defaultProps = {
    buttons: []
  };

  render() {
    return (
      <Main>
        <ButtonContainer>
          {this.props.buttons.map(button => (
            <StyledButton
              key={button.label}
              {...button}
              active={this.props.mode === button.label.toUpperCase()}
            />
          ))}
        </ButtonContainer>
      </Main>
    );
  }
}
