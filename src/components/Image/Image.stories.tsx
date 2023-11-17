import type { StoryObj, Meta } from '@storybook/react';

import Image from '.';

const meta: Meta<typeof Image> = {
  title: 'Image',
  component: Image
};

export const Default: StoryObj<typeof Image> = {
  args: {
    src: 'https://www.boltaction.com/images/starter-set2-72.jpg',
    caption: 'Bolt Action - Warlord Games'
  }
};

export default meta;
