import React from 'react';

export default class Month extends React.Component {
  static defaultProps = { month: [] };
  parseMonth = () => {
    const { month } = this.props;

    return 'parsing';
  };
  render() {
    const { month } = this.props;
    return <p>{this.parseMonth()}</p>;
  }
}
