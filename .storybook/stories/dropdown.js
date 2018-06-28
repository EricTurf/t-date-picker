import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '../../src/components/dropdown';

storiesOf('DropDown', module).add('default', () => (
  <div style={{ width: '200px', height: '100px' }}>
    <Dropdown
      items={['One', 'Two', 'Three', 'supertjdfhgkdfjhgkfdghj']}
      onSelect={action('Selected value')}
      value="supertjdfhgkdfjhgkfdghj"
    />
  </div>
));
