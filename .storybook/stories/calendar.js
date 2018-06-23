import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Calendar } from '../../src/components/calendar';

storiesOf('Calendar', module).add('default', () => {
  return <Calendar onSelect={v => console.log(v)} />;
});
