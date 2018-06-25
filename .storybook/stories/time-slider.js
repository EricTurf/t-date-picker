import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TimeSlider } from '../../src/components/time-slider';

storiesOf('TimeSlider', module).add('with text', () => {
  return <TimeSlider />;
});
