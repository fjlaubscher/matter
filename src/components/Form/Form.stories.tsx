import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Button from '../Button';
import Input from '../InputField';
import Select from '../SelectField';
import TextArea from '../TextAreaField';

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
        <TextArea label="Notes" placeholder="Lorem Ipsum or something idk" />
        <Button type="submit">Submit</Button>
      </>
    )
  }
};

export default meta;
