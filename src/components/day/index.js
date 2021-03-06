import React from 'react';

import { Main } from './index.styled';
import format from 'date-fns/format';
import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';

export default class Day extends React.Component {
  state = { isHovered: false };
  render() {
    const { day, onDaySelect, date, selectedDate } = this.props;

    const isNotCurrentMonth = getMonth(date) !== getMonth(day);

    return (
      <Main
        isNotCurrentMonth={isNotCurrentMonth}
        isHovered={!isNotCurrentMonth && this.state.isHovered}
        onMouseOver={() => this.setState({ isHovered: true })}
        onMouseOut={() => this.setState({ isHovered: false })}
        isSelectedDate={
          !isNotCurrentMonth &&
          format(selectedDate, 'YYYY-MM-DD') === format(day, 'YYYY-MM-DD')
        }
        onClick={() => onDaySelect(getDate(day))}
      >
        {isNotCurrentMonth
          ? ''
          : format(day, 'DD')[0] === '0'
            ? format(day, 'DD')[1]
            : format(day, 'DD')}
      </Main>
    );
  }
}
