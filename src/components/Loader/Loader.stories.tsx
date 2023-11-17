import type { StoryObj, Meta } from '@storybook/react';

import Loader from '.';

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader
};

export const Default: StoryObj<typeof Loader> = {
  args: {
    white: false
  }
};

export default meta;
