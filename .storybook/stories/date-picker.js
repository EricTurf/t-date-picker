import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatePicker from '../../src/index';

storiesOf('Default', module).add('with text', () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'coral'
      }}
    >
      <div style={{ marginLeft: '400px' }}>
        <DatePicker />
      </div>
    </div>
  );
});
