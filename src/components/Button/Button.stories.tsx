import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Default',
    loading: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'info', 'success', 'warning', 'error']
    }
  }
};

export default meta;
