import React from 'react';

import Week from '../week';

export default class Month extends React.Component {
  static defaultProps = { month: [] };
  parseMonth = () => {
    const { month, onDateSelect } = this.props;
    let parsedMonth = [];

    for (let i = 0; i < month.length; i = i + 7) {
      parsedMonth = [...parsedMonth, month.slice(i, i + 7)];
    }

    return parsedMonth.map(week => (
      <Week onDateSelect={onDateSelect} key={week.join()} week={week} />
    ));
  };
  render() {
    const { month } = this.props;
    return <p>{this.parseMonth()}</p>;
  }
}
