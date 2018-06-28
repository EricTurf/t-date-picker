import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatePicker from '../../src/index';

class DatePickerStory extends React.Component {
  state = { value: null };
  handleSelect = value => {
    action('Date was chosen')(value);
    this.setState({ value });
  };
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'coral'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DatePicker value={this.state.value} onSelect={this.handleSelect} />
        </div>
      </div>
    );
  }
}

storiesOf('DatePicker', module)
  .add('State managed', () => <DatePickerStory />)
  .add('with formatting', () => (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'coral'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DatePicker
          value={Date.now()}
          dateFormat={'YYYY-D-MM'}
          onSelect={action('Date was chosen')}
        />
      </div>
    </div>
  ));
