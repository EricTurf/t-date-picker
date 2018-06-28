import React from 'react';

import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import getYear from 'date-fns/get_year';
import parse from 'date-fns/parse';

import { ButtonBar } from '../button-bar';
import { YearPicker } from '../year-picker';
import { MonthPicker } from '../month-picker';

import { Calendar } from '../calendar';

import {
  Main,
  Footer,
  Header,
  CancelButton,
  ConfirmButton
} from './pop-over.styled';

export default class Popover extends React.Component {
  static defaultProps = { background: 'white' };

  state = {
    today: Date.now(),
    year: getYear(Date.now()),
    month: getMonth(Date.now()),
    day: getDate(Date.now()),
    selectedDate: null
  };

  onConfirm = () => {
    this.props.toggleCalendar();
    this.props.onSelect(this.state.selectedDate);
  };

  onDateSelect = selectedDate => this.setState({ selectedDate });

  onYearChange = year => this.setState({ year });
  onMonthChange = month => this.setState({ month });

  render() {
    const { today, year, month, day, selectedDate } = this.state;

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
          selectedDate={selectedDate}
        />
        <Footer>
          <CancelButton onClick={this.props.toggleCalendar} />
          <ConfirmButton onClick={this.onConfirm} />
        </Footer>
      </Main>
    );
  }
}
