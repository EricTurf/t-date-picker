import React from 'react';

import { Wrapper, WeekDay, WeekDayContainer } from './calendar.styled';

import { getDaysInMonth, addDays } from 'date-fns';

import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import getYear from 'date-fns/get_year';
import parse from 'date-fns/parse';

import Header from '../header';
import Month from '../month';

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const buildWeekday = (weekday, i) => (
  <WeekDay key={`${weekday}-${i}`}>{weekday}</WeekDay>
);

const buildMonth = (today, onDateSelect) => {
  const monthLength = getDaysInMonth(today);
  const firstDay = startOfWeek(startOfMonth(today));

  const month = Array(35)
    .fill(0)
    .map((v, i) => addDays(firstDay, i));

  return <Month onDateSelect={onDateSelect} month={month} />;
};

export default class Calandar extends React.Component {
  onDateSelect = date => (console.log('clicked'), this.props.onSelect(date));

  onYearChange = year => this.setState({ year });
  onMonthChange = month => this.setState({ month });

  render() {
    const {
      today,
      date,
      onMonthChange,
      onYearChange,
      onDateSelect
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
        {buildMonth(date, onDateSelect)}
        {/* <TimePicker/> */}
      </Wrapper>
    );
  }
}
