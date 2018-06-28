import React from 'react';

import format from 'date-fns/format';

import { Popover } from './components/pop-over';

import { DateField, Main, Value } from './index.styled';

export default class DatePicker extends React.Component {
  state = { showCalendar: false };

  static defaultProps = { background: 'white' };

  togglePicker = () => this.setState({ showPicker: !this.state.showPicker });

  render() {
    const { onSelect, className } = this.props;

    return (
      <Main className={className}>
        <DateField isOpen={this.state.showPicker} onClick={this.togglePicker}>
          <Value>
            {this.props.value
              ? format(
                  this.props.value,
                  this.props.dateFormat || 'dddd Do [of] MMMM YYYY'
                )
              : 'Click me to select a date'}
          </Value>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </DateField>
        {this.state.showPicker && (
          <Popover
            toggleCalendar={this.togglePicker}
            background={this.props.background}
            onSelect={onSelect}
          />
        )}
      </Main>
    );
  }
}
