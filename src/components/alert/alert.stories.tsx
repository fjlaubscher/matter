import type { StoryObj, Meta } from '@storybook/react';

import Alert from '.';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert
};

export const Default: StoryObj<typeof Alert> = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident iure, dolorum rerum, alias aut ut dolores autem a in minus nisi voluptatibus tempora ad iste officiis, magni consequatur quas!',
    title: '',
    variant: 'info'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['accent', 'info', 'success', 'warning', 'error']
    }
  }
};

export default meta;
