import type { StoryObj, Meta } from '@storybook/react';

import Container from '.';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container
};

export const Default: StoryObj<typeof Container> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti delectus fuga minus odit fugit voluptatum corporis illo veniam, eveniet atque, saepe sint architecto nostrum est? Aliquam sequi placeat magni.'
  }
};

export default meta;
