import React from 'react';

import format from 'date-fns/format';
import { MonthDropdown } from './month-picker.styled';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class MonthPicker extends React.Component {
  render() {
    return (
      <MonthDropdown
        items={months}
        value={format(this.props.date, 'MMMM')}
        onSelect={this.props.onMonthChange}
      />
    );
  }
}
