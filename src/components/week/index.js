import React from 'react';
import format from 'date-fns/format';

import Day from '../day';
import { Main } from './index.styled';

export default class Week extends React.Component {
  parseWeek = () => {
    const { week } = this.props;

    return week.map(day => <Day key={day} day={format(day, 'DD')} />);
  };
  render() {
    return <Main>{this.parseWeek()}</Main>;
  }
}
