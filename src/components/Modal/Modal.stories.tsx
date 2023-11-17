import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import Button from '../Button';
import Modal from '.';
import { useState } from 'react';

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

export const WithTrigger: StoryObj<typeof Modal> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        {!isOpen && <Button onClick={() => setIsOpen(true)}>Show Modal</Button>}
        <Modal {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio architecto
          consequuntur amet non eveniet? Voluptate repellendus totam culpa, sit accusamus eius harum
          cum aliquam enim iure, quo, unde temporibus!
        </Modal>
      </>
    );
  }
};

export default meta;
