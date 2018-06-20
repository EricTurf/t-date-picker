import React from 'react';
import format from 'date-fns/format';

import { YearPicker } from '../year-picker';

import {
  Main,
  MonthContainer,
  Header,
  BackArrow,
  ForwardArrow,
  YearContainer
} from './index.styled';

export default class CalendarHeader extends React.Component {
  render() {
    const { today } = this.props;
    return (
      <Main>
        <MonthContainer>
          <BackArrow />
          <Header>{format(today, 'MMMM')}</Header>
          <ForwardArrow />
        </MonthContainer>
        <YearContainer>
          <YearPicker today={today} />
        </YearContainer>
      </Main>
    );
  }
}
