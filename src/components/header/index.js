import React from 'react';
import format from 'date-fns/format';

import { YearPicker } from '../year-picker';
import addMonths from 'date-fns/add_months';
import subMonths from 'date-fns/sub_months';
import getMonth from 'date-fns/get_month';
import getYear from 'date-fns/get_year';
import addYears from 'date-fns/add_years';
import subYears from 'date-fns/sub_years';

import {
  Main,
  MonthContainer,
  Header,
  BackArrow,
  ForwardArrow,
  YearContainer
} from './index.styled';

export default class CalendarHeader extends React.Component {
  handleBack = () => {
    const { onMonthChange, onYearChange, date } = this.props;
    const newMonth = getMonth(subMonths(date, 1));

    if (newMonth === 11) onYearChange(getYear(subYears(date, 1)));

    onMonthChange(newMonth);
  };
  handleForward = () => {
    const { onMonthChange, onYearChange, date } = this.props;
    const newMonth = getMonth(addMonths(date, 1));

    if (newMonth === 0) onYearChange(getYear(addYears(date, 1)));

    onMonthChange(newMonth);
  };

  render() {
    const { today, date, onYearChange, onMonthChange } = this.props;

    return (
      <Main>
        <MonthContainer>
          <BackArrow onClick={this.handleBack} />
          <Header>{format(date, 'MMMM')}</Header>
          <ForwardArrow onClick={this.handleForward} />
        </MonthContainer>
      </Main>
    );
  }
}
