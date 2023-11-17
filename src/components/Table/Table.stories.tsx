import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Table from '.';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table
};

export const Default: StoryObj<typeof Table> = {
  args: {
    headings: [{ text: 'Heading 1' }, { text: 'Heading 2' }, { text: 'Heading 3' }],
    children: (
      <>
        <tr>
          <td>Something</td>
          <td>Something</td>
          <td>Something</td>
        </tr>
        <tr>
          <td>Something</td>
          <td>Something</td>
          <td>Something</td>
        </tr>
      </>
    )
  }
};

export default meta;
