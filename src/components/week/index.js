import React from 'react';

import Day from '../day';
import { Main } from './index.styled';

export default class Week extends React.Component {
  parseWeek = () => {
    const { week, onDateSelect } = this.props;

    return week.map(day => (
      <Day onDateSelect={onDateSelect} key={day} day={day} />
    ));
  };
  render() {
    return <Main>{this.parseWeek()}</Main>;
  }
}
