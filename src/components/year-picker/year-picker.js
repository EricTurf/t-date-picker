import React from 'react';

import setYear from 'date-fns/set_year';
import getYear from 'date-fns/get_year';
import format from 'date-fns/format';

export default class YearPicker extends React.Component {
  buildOptions = () => {
    const { today } = this.props;

    const past = Array(25)
      .fill(0)
      .map((v, i) => (
        <option>
          {format(setYear(today, getYear(today) - (25 - i)), 'YYYY')}
        </option>
      ));
    const future = Array(25)
      .fill(0)
      .map((v, i) => (
        <option>{format(setYear(today, getYear(today) + i), 'YYYY')}</option>
      ));

    return [...past, ...future];
  };

  render() {
    const { date } = this.props;
    return (
      <select
        value={getYear(date)}
        onChange={e => this.props.onYearChange(parseInt(e.target.value))}
      >
        {this.buildOptions()}
      </select>
    );
  }
}
