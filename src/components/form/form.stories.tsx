import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Button from '../button';
import Input from '../field/input';
import Select from '../field/select';
import Textarea from '../field/textarea';

import Form from '.';

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form
};

export const Default: StoryObj<typeof Form> = {
  args: {
    children: (
      <>
        <Select
          label="Country"
          options={[{ value: 'something', description: 'something' }]}
          required
        />
        <Input label="Email" placeholder="someone@email.com" type="email" required />
        <Textarea label="Notes" placeholder="Lorem Ipsum or something idk" />
        <Button type="submit">Submit</Button>
      </>
    )
  }
};

export default meta;
