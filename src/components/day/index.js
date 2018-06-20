import React from 'react';

import { Main } from './index.styled';

export default class Day extends React.Component {
  render() {
    return <Main>{this.props.day}</Main>;
  }
}
