import React from 'react';

import { Wrapper, WeekDay, WeekDayContainer } from './calendar.styled';

import { getDaysInMonth, addDays } from 'date-fns';

import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';

import Header from '../header';
import { Month } from '../month';

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const buildWeekday = (weekday, i) => (
  <WeekDay key={`${weekday}-${i}`}>{weekday}</WeekDay>
);

const buildMonth = (date, selectedDate, onDateSelect) => {
  const firstDay = startOfWeek(startOfMonth(date));

  const month = Array(35)
    .fill(0)
    .map((v, i) => addDays(firstDay, i));

  return (
    <Month
      selectedDate={selectedDate}
      date={date}
      onDateSelect={onDateSelect}
      month={month}
    />
  );
};

export default class Calandar extends React.Component {
  render() {
    const {
      today,
      date,
      onMonthChange,
      onYearChange,
      onDateSelect,
      selectedDate
    } = this.props;

    return (
      <Wrapper>
        <Header
          date={date}
          onMonthChange={onMonthChange}
          onYearChange={onYearChange}
          today={today}
        />

        {/* <Calendar/> */}
        <WeekDayContainer>{weekdays.map(buildWeekday)}</WeekDayContainer>
        {buildMonth(date, selectedDate, onDateSelect)}
        {/* <TimePicker/> */}
      </Wrapper>
    );
  }
}
