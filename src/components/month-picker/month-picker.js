import React from 'react';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import getYear from 'date-fns/get_year';

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
  onSelectHandler = m => {
    const { date, onMonthChange } = this.props;
    const day = getDate(date);
    const year = getYear(date);

    const month = getMonth(parse(`${year}-${m}-${day}`));

    onMonthChange(month);
  };
  render() {
    return (
      <MonthDropdown
        items={months}
        value={format(this.props.date, 'MMMM')}
        onSelect={this.onSelectHandler}
      />
    );
  }
}
