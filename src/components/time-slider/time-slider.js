import React from 'react';

import { Main, List, ListItem } from './time-slider.styled';

export default class TimeSlider extends React.Component {
  buildHourList = () => {
    const { minHour } = this.props;

    const initialHour = minHour || 1;

    return Array(13 - initialHour)
      .fill(0)
      .map((v, i) => {
        return <ListItem key={i + 1}>{i + 1}</ListItem>;
      });
  };

  buildMinuteList = () => {
    const { minMinute } = this.props;

    const initialMinute = minMinute || 0;

    return Array((60 - initialMinute) / 5)
      .fill(0)
      .map((v, i) => {
        return <ListItem key={(60 - i) / 5}>{i * 5}</ListItem>;
      });
  };

  render() {
    return (
      <Main>
        <List>{this.buildHourList()}</List>
        <List>{this.buildMinuteList()}</List>
      </Main>
    );
  }
}
