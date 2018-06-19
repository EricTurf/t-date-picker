import React from 'react';

import { Wrapper, WeekDay, WeekDayContainer } from './index.styled';

import { getDaysInMonth, addDays } from 'date-fns';

import startOfMonth from 'date-fns/start_of_month';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/start_of_week';
import getMonth from 'date-fns/get_month';
import endOfWeek from 'date-fns/end_of_week';
import differenceInDays from 'date-fns/difference_in_days';

import Month from './month';
import { first } from 'glamor';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const buildWeekday = (weekday, i) => (
  <WeekDay key={`${weekday}-${i}`}>{weekday}</WeekDay>
);

const buildMonth = today => {
  const monthLength = getDaysInMonth(today);
  const firstDay = startOfWeek(startOfMonth(today));

  const month = Array(35)
    .fill(0)
    .map((v, i) => addDays(firstDay, i));

  return <Month month={month} />;
};

const getCurrentMonth = today => {
  return <h2>{format(today, 'MMMM')}</h2>;
};

export default class DatePicker extends React.Component {
  state = { today: addDays(Date.now(), 120) };

  render() {
    const { today } = this.state;
    return (
      <Wrapper>
        {getCurrentMonth(today)}
        <WeekDayContainer>{weekdays.map(buildWeekday)}</WeekDayContainer>
        {buildMonth(today)}
      </Wrapper>
    );
  }
}
