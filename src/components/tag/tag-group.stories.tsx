import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import TagGroup from './group';
import Tag from '.';

const meta: Meta<typeof TagGroup> = {
  title: 'TagGroup',
  component: TagGroup
};

export const Default: StoryObj<typeof TagGroup> = {
  args: {
    children: (
      <>
        <Tag>Default</Tag>
        <Tag variant="accent">Accent</Tag>
        <Tag variant="info">Info</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
      </>
    )
  }
};

export default meta;
