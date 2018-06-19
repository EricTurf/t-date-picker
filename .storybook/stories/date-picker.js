import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatePicker from '../../src/index';

storiesOf('Default', module).add('with text', () => <DatePicker />);
