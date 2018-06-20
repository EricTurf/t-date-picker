import React from 'react';

import { Wrapper, WeekDay, WeekDayContainer } from './index.styled';

import { getDaysInMonth, addDays } from 'date-fns';

import startOfMonth from 'date-fns/start_of_month';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/start_of_week';
import getMonth from 'date-fns/get_month';
import endOfWeek from 'date-fns/end_of_week';
import differenceInDays from 'date-fns/difference_in_days';

import Header from './components/header';
import Month from './components/month';

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

export default class DatePicker extends React.Component {
  state = { today: Date.now() };

  render() {
    const { today } = this.state;
    return (
      <Wrapper>
        <Header today={today} />

        {/* <Calendar/> */}
        <WeekDayContainer>{weekdays.map(buildWeekday)}</WeekDayContainer>
        {buildMonth(today)}
        {/* <TimePicker/> */}
      </Wrapper>
    );
  }
}
