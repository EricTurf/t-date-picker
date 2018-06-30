import React from 'react';

import Week from '../week';

import { Main } from './month.styled';

export default class Month extends React.Component {
  static defaultProps = { month: [] };
  parseMonth = () => {
    const { month, onDaySelect, date, selectedDate } = this.props;

    let parsedMonth = [];

    for (let i = 0; i < month.length; i = i + 7) {
      parsedMonth = [...parsedMonth, month.slice(i, i + 7)];
    }

    return parsedMonth.map(week => (
      <Week
        date={date}
        onDaySelect={onDaySelect}
        selectedDate={selectedDate}
        key={week.join()}
        week={week}
      />
    ));
  };

  render() {
    return <Main>{this.parseMonth()}</Main>;
  }
}
