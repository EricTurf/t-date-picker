import React from 'react';

import getMinutes from 'date-fns/get_minutes';
import getHours from 'date-fns/get_hours';

import { TimeSlider } from '../time-slider';

import {
  Wrapper,
  Time,
  TimeContainer,
  Colon,
  ButtonContainer,
  AMButton,
  PMButton
} from './time-picker.styled';

export default class TimePicker extends React.Component {
  state = {
    hour: getHours(Date.now()),
    minute: getMinutes(Date.now()),
    mode: null
  };

  componentDidMount() {
    let hour = getHours(Date.now());
    const minute = getMinutes(Date.now());
    let mode = 'AM';
    if (hour > 12) {
      mode = 'PM';
      hour = hour - 12;
    }

    this.setState({ hour, minute, mode });
  }

  onChangeHandler = (key, { min, max }) => {
    return e => {
      if (e.target.value === '') return this.setState({ [key]: '' });
      let value = parseInt(e.target.value);
      if (value < min) value = min;
      if (value > max) value = max;

      this.setState({ [key]: value });
    };
  };

  render() {
    return (
      <Wrapper>
        <TimeContainer>
          <Time
            min="1"
            onChange={this.onChangeHandler('hour', { min: 1, max: 12 })}
            value={
              this.state.hour > 12 ? this.state.hour - 12 : this.state.hour
            }
          />
          <Colon />
          <Time
            onChange={this.onChangeHandler('minute', { min: 0, max: 59 })}
            value={this.state.minute}
          />
        </TimeContainer>

        <input
          onChange={e => this.setState({ hour: parseInt(e.target.value) })}
          type="range"
          min="1"
          max="12"
          value={
            this.state.hour === ''
              ? 1
              : this.state.hour > 12
                ? this.state.hour - 12
                : this.state.hour
          }
        />

        <input
          onChange={e => {
            const value = parseInt(e.target.value);
            this.setState({ minute: value === 60 ? value - 1 : value });
          }}
          type="range"
          value={this.state.minute}
          step={this.state.minute === 55 ? '4' : '5'}
          min="00"
          max="60"
        />
        <ButtonContainer>
          <AMButton active={this.state.mode === 'AM'} label="AM" />
          <PMButton active={this.state.mode === 'PM'} label="PM" />
        </ButtonContainer>
      </Wrapper>
    );
  }
}
