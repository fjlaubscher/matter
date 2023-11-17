import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import TextAreaField from '.';

const meta: Meta<typeof TextAreaField> = {
  title: 'TextAreaField',
  component: TextAreaField
};

export const Default: StoryObj<typeof TextAreaField> = {
  render: (args) => <TextAreaField {...args} />,
  args: {
    placeholder: 'Placeholder text',
    label: 'Textarea',
    errorMessage: '',
    required: false
  }
};

export default meta;
