import React from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';
import type { StoryObj, Meta } from '@storybook/react';

import Button from '../button';
import IconButton from '../button/icon';
import Layout from '.';

const meta: Meta<typeof Image> = {
  title: 'Layout',
  component: Layout
};

export const Default: StoryObj<typeof Layout> = {
  args: {
    home: (
      <IconButton>
        <FaHome />
      </IconButton>
    ),
    title: 'Page Title',
    action: (
      <IconButton>
        <FaPlus />
      </IconButton>
    ),
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti delectus fuga minus odit fugit voluptatum corporis illo veniam, eveniet atque, saepe sint architecto nostrum est? Aliquam sequi placeat magni.'
  }
};

export const WithMenu: StoryObj<typeof Layout> = {
  args: {
    home: (
      <IconButton>
        <FaHome />
      </IconButton>
    ),
    title: 'Page Title',
    action: (
      <IconButton>
        <FaPlus />
      </IconButton>
    ),
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit corrupti delectus fuga minus odit fugit voluptatum corporis illo veniam, eveniet atque, saepe sint architecto nostrum est? Aliquam sequi placeat magni.',
    menu: (
      <>
        <Button>Menu Item 1</Button>
        <Button>Menu Item 2</Button>
        <Button>Menu Item 3</Button>
      </>
    )
  }
};

export default meta;
