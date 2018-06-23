import React from 'react';

import { ButtonBar } from '../button-bar';

import { Calendar } from '../calendar';
import { TimePicker } from '../time-picker';

import { Main, Footer, Header, ChildContainer } from './pop-over.styled';

export default class Popover extends React.Component {
  state = { mode: 'DATE' };
  static defaultProps = { background: 'white' };

  onModeChange = mode => mode !== this.state.mode && this.setState({ mode });

  render() {
    const { mode } = this.state;

    return (
      <Main background={this.props.background}>
        <Header>
          <ButtonBar
            mode={mode}
            buttons={[
              {
                label: 'Date',
                onClick: () => this.onModeChange('DATE')
              },
              { label: 'Time', onClick: () => this.onModeChange('TIME') }
            ]}
          />
        </Header>
        <ChildContainer>
          {mode === 'DATE' ? <Calendar /> : <TimePicker />}
        </ChildContainer>
        <Footer />
      </Main>
    );
  }
}
