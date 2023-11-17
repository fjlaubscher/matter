import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import SelectField from '.';

const meta: Meta<typeof SelectField> = {
  title: 'SelectField',
  component: SelectField
};

export const Default: StoryObj<typeof SelectField> = {
  render: (args) => <SelectField {...args} />,
  args: {
    label: 'Select',
    options: [{ value: 1, description: 'Something' }]
  }
};

export default meta;
