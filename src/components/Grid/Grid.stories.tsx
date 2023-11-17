import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Card from '../Card';
import Grid from '.';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid
};

export const Default: StoryObj<typeof Grid> = {
  args: {
    simple: false,
    children: (
      <>
        <Card>item 1</Card>
        <Card>item 2</Card>
        <Card>item 3</Card>
      </>
    )
  }
};

export const Simple: StoryObj<typeof Grid> = {
  args: {
    simple: true,
    children: (
      <>
        <Card>item 1</Card>
        <Card>item 2</Card>
        <Card>item 3</Card>
      </>
    )
  }
};

export default meta;
