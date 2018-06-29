import React from 'react';

import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import getYear from 'date-fns/get_year';
import parse from 'date-fns/parse';

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
    selectedDate: this.props.value
  };

  componentDidMount = () => {
    const { value } = this.props;

    const date = value || Date.now();

    this.setState({
      today: Date.now(),
      year: getYear(date),
      month: getMonth(date),
      day: getDate(date),
      selectedDate: value
    });
  };

  onConfirm = () => {
    const { year, month, day } = this.state;

    this.props.toggleCalendar();
    this.props.onSelect(parse(`${year}-${month + 1}-${day}`));
  };

  onDaySelect = day => this.setState({ day });

  onYearChange = year => this.setState({ year });

  onMonthChange = month => this.setState({ month });

  render() {
    const { today, year, month, day } = this.state;

    const date = parse(`${year}-${month + 1}-${day}`);

    return (
      <Main>
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
          selectedDate={date}
          onMonthChange={this.onMonthChange}
          onYearChange={this.onYearChange}
          onDaySelect={this.onDaySelect}
        />
        <Footer>
          <CancelButton onClick={this.props.toggleCalendar} />
          <ConfirmButton onClick={this.onConfirm} />
        </Footer>
      </Main>
    );
  }
}
