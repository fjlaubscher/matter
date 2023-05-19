import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Button from '../button';
import Modal from '.';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal
};

export const Default: StoryObj<typeof Modal> = {
  render: (args) => (
    <>
      <Button onClick={() => (document.getElementById('modal') as HTMLDialogElement).showModal()}>
        Show Modal
      </Button>
      <Modal id="modal" {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea error fuga, id magni,
        maiores molestias nostrum numquam placeat porro quae quasi quis reprehenderit tenetur ut
        velit veniam voluptatibus voluptatum.
      </Modal>
    </>
  )
};

export default meta;
