import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import InputField from '.';

const meta: Meta<typeof InputField> = {
  title: 'InputField',
  component: InputField
};

export const Default: StoryObj<typeof InputField> = {
  render: (args) => <InputField {...args} />,
  args: {
    type: 'text',
    placeholder: 'Placeholder text',
    label: 'Input',
    errorMessage: '',
    required: false
  }
};

export default meta;
