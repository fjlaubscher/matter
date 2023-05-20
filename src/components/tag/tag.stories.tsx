import type { StoryObj, Meta } from '@storybook/react';

import Tag from '.';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag
};

export const Default: StoryObj<typeof Tag> = {
  args: {
    variant: 'accent',
    children: 'Something'
  }
};

export default meta;
