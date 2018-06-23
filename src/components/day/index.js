import React from 'react';

import { Main } from './index.styled';
import format from 'date-fns/format';

export default class Day extends React.Component {
  render() {
    const { day, onDateSelect } = this.props;

    return <Main onClick={() => onDateSelect(day)}>{format(day, 'DD')}</Main>;
  }
}
