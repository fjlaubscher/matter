import type { StoryObj, Meta } from '@storybook/react';

import Modal from '.';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal
};

export const Default: StoryObj<typeof Modal> = {
  args: {
    open: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea error fuga, id magni, maiores molestias nostrum numquam placeat porro quae quasi quis reprehenderit tenetur ut velit veniam voluptatibus voluptatum.'
  }
};

export default meta;
