import React from 'react';

import { Calendar } from './components/calendar';

import { Popover } from './components/pop-over';

import { StyledInput } from './index.styled';

export default class DatePicker extends React.Component {
  state = { showCalendar: false };

  static defaultProps = { background: 'white' };

  togglePicker = () => this.setState({ showPicker: !this.state.showPicker });
  render() {
    const { onSelect } = this.props;

    return (
      <React.Fragment>
        <StyledInput onClick={this.togglePicker} placeholder="Click Here" />
        {this.state.showPicker && (
          <Popover background={this.props.background} onSelect={onSelect} />
        )}
      </React.Fragment>
    );
  }
}
