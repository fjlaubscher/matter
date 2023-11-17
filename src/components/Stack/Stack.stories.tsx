import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Card from '../Card';
import Stack from '.';

const meta: Meta<typeof Stack> = {
  title: 'Stack',
  component: Stack
};

export const Default: StoryObj<typeof Stack> = {
  args: {
    direction: 'row',
    children: (
      <>
        <Card>Something</Card>
        <Card>Something</Card>
        <Card>Something</Card>
      </>
    )
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['column', 'row']
    }
  }
};

export default meta;
