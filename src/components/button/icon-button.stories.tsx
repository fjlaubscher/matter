import React from 'react';
import { FaPlus } from 'react-icons/fa';
import type { StoryObj, Meta } from '@storybook/react';

import IconButton from './icon';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton
};

export const Default: StoryObj<typeof IconButton> = {
  args: {
    children: <FaPlus />
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'info', 'success', 'warning', 'error']
    }
  }
};

export default meta;
