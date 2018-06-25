import React from 'react';

import { Main, StyledButton, ButtonContainer } from './button-bar.styled';

export default class ButtonBar extends React.Component {
  static defaultProps = {
    buttons: []
  };

  render() {
    return (
      <Main className={this.props.className}>
        <ButtonContainer>
          {this.props.buttons.map(
            button => (
              console.log(this.props.mode === button.label.toUpperCase()),
              (
                <StyledButton
                  className={this.props.className}
                  key={button.label}
                  {...button}
                  color={'red'}
                  activeColor="blue"
                  active={this.props.mode === button.label.toUpperCase()}
                />
              )
            )
          )}
        </ButtonContainer>
      </Main>
    );
  }
}
