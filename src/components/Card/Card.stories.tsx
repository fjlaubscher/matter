import type { StoryObj, Meta } from '@storybook/react';

import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card
};

export const Default: StoryObj<typeof Card> = {
  args: {
    title: 'Title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti delectus fuga minus odit fugit voluptatum corporis illo veniam, eveniet atque, saepe sint architecto nostrum est? Aliquam sequi placeat magni.'
  }
};

export default meta;
