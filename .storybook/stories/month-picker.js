import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MonthPicker } from '../../src/components/month-picker';

storiesOf('MonthPicker', module).add('default', () => (
  <MonthPicker onMonthChange={action('Month Change')} />
));
