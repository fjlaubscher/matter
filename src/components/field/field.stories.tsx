import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Field from '.';
import InputField from './input';
import TextAreaField from './textarea';
import SelectField from './select';

const meta: Meta<typeof Field> = {
  title: 'Field',
  component: Field
};

export const Default: StoryObj<typeof Field> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti delectus fuga minus odit fugit voluptatum corporis illo veniam, eveniet atque, saepe sint architecto nostrum est? Aliquam sequi placeat magni.',
    error: ''
  }
};

export const Input: StoryObj<typeof InputField> = {
  render: (args) => <InputField {...args} />,
  args: {
    type: 'text',
    placeholder: 'Placeholder text',
    label: 'Input',
    errorMessage: '',
    required: false
  }
};

export const TextArea: StoryObj<typeof TextAreaField> = {
  render: (args) => <TextAreaField {...args} />,
  args: {
    placeholder: 'Placeholder text',
    label: 'Textarea',
    errorMessage: '',
    required: false
  }
};

export const Select: StoryObj<typeof SelectField> = {
  render: (args) => <SelectField {...args} />,
  args: {
    label: 'Select',
    options: [{ value: 1, description: 'Something' }]
  }
};

export default meta;
