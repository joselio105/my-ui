import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Form, Props } from '../components/Form';
import { FieldInput } from '../components/FieldInput';
import { BrowserRouter } from 'react-router-dom';
import { FieldInputRadio } from '../components/FieldInputRadio';
import { Check, X } from 'lucide-react';

const meta: Meta = {
  title: 'Form',
  component: Form,
};

export default meta;

const Template: StoryFn<Props> = args => (
  <BrowserRouter>
    <Form {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  backTo: '/sapo',
  feedbackMessage: 'Apenas um teste',
  success: true,
  children: (
    <>
      <FieldInput
        inputProps={{ placeholder: 'Campo de teste' }}
        labelText="Teste"
      />
      <FieldInputRadio
        title="Escolha"
        radios={[
          {
            labelText: 'Não',
            labelIcon: <X />,
            inputProps: { name: 'escolha', id: '0', value: '0' },
          },
          {
            labelText: 'Sim',
            labelIcon: <Check />,
            inputProps: { name: 'escolha', id: '1', value: '1', checked: true },
          },
        ]}
      />
    </>
  ),
};
