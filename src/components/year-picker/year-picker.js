import React from 'react';

import setYear from 'date-fns/set_year';
import getYear from 'date-fns/get_year';
import format from 'date-fns/format';

import { YearDropdown } from './year-picker.styled.js';

export default class YearPicker extends React.Component {
  getItems = () => {
    const { today } = this.props;

    return Array(25)
      .fill(0)
      .map((_, i) => format(setYear(today, getYear(today) + i), 'YYYY'));
  };

  render() {
    const { date } = this.props;
    return (
      <YearDropdown
        value={getYear(date)}
        items={this.getItems()}
        onSelect={y => this.props.onYearChange(parseInt(y))}
      />
    );
  }
}
