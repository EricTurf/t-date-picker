import React from 'react';

import Day from '../day';
import { Main } from './index.styled';

export default class Week extends React.Component {
  parseWeek = () => {
    const { week, onDateSelect, date, selectedDate } = this.props;

    return week.map(day => (
      <Day
        date={date}
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
        key={day}
        day={day}
      />
    ));
  };
  render() {
    return <Main>{this.parseWeek()}</Main>;
  }
}
