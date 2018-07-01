import React from 'react';

import format from 'date-fns/format';

import { Popover } from './components/pop-over';

import { DateField, Main, Value, CalendarIcon } from './index.styled';

export default class DatePicker extends React.Component {
  state = { showCalendar: false };

  static defaultProps = {
    dateFormat: 'ddd Do [of] MMMM YYYY'
  };

  togglePicker = () => this.setState({ showPicker: !this.state.showPicker });

  render() {
    const { onSelect, className, value, dateFormat } = this.props;

    return (
      <Main className={className}>
        <DateField isOpen={this.state.showPicker} onClick={this.togglePicker}>
          <Value>
            {value ? format(value, dateFormat) : 'Click me to select a date'}
          </Value>
          <CalendarIcon />
        </DateField>
        {this.state.showPicker && (
          <Popover
            value={value}
            toggleCalendar={this.togglePicker}
            onSelect={onSelect}
          />
        )}
      </Main>
    );
  }
}
