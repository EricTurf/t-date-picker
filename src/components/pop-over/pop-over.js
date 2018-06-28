import React from 'react';

import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import getYear from 'date-fns/get_year';
import parse from 'date-fns/parse';

import { ButtonBar } from '../button-bar';
import { YearPicker } from '../year-picker';
import { MonthPicker } from '../month-picker';

import { Calendar } from '../calendar';

import { Main, Footer, Header, ChildContainer } from './pop-over.styled';

export default class Popover extends React.Component {
  static defaultProps = { background: 'white' };

  state = {
    today: Date.now(),
    year: getYear(Date.now()),
    month: getMonth(Date.now()),
    day: getDate(Date.now())
  };

  onDateSelect = date => (console.log('clicked'), this.props.onSelect(date));

  onYearChange = year => this.setState({ year });
  onMonthChange = month => this.setState({ month });

  render() {
    const { today, year, month, day } = this.state;

    const date = parse(`${year}-${month + 1}-${day}`);

    return (
      <Main background={this.props.background}>
        <Header>
          <MonthPicker date={date} onMonthChange={this.onMonthChange} />
          <YearPicker
            onYearChange={this.onYearChange}
            today={today}
            date={date}
          />
        </Header>
        <Calendar
          date={date}
          today={today}
          onMonthChange={this.onMonthChange}
          onYearChange={this.onYearChange}
          onDateSelect={this.onDateSelect}
        />
        <Footer />
      </Main>
    );
  }
}
