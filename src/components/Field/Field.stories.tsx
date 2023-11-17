import type { StoryObj, Meta } from '@storybook/react';

import Field from '.';

const meta: Meta<typeof Field> = {
  title: 'Field',
  component: Field
};

export const Default: StoryObj<typeof Field> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti delectus fuga minus odit fugit voluptatum corporis illo veniam, eveniet atque, saepe sint architecto nostrum est? Aliquam sequi placeat magni.',
    error: ''
  }
};

export default meta;
