import type { StoryObj, Meta } from '@storybook/react';

import Stat from '.';

const meta: Meta<typeof Stat> = {
  title: 'Stat',
  component: Stat
};

export const Default: StoryObj<typeof Stat> = {
  args: {
    title: 'Title',
    value: 'Something',
    description: 'Description'
  }
};

export default meta;
