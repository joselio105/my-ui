import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FieldInput, Props } from '../components/FieldInput';
import { Calendar } from 'lucide-react';

const meta: Meta = {
  title: 'FieldInput',
  component: FieldInput,
};

export default meta;

const Template: StoryFn<Props> = args => <FieldInput {...args} />;

export const Default = Template.bind({});
export const Icon = Template.bind({});
export const Filled = Template.bind({});
export const AutoFill = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  labelText: 'Campo teste',
  inputProps: { placeholder: 'Um campo para testar' },
};
Icon.args = {
  labelText: 'Teste com ícone',
  inputProps: { placeholder: 'Um campo com ícone', type: 'date' },
  icon: <Calendar />,
};
Filled.args = {
  labelText: 'Teste preenchido',
  inputProps: {
    value: 'Um valor preenchido',
  },
};
AutoFill.args = {
  labelText: 'Campo com auto preenchimento',
  inputProps: {
    placeholder: 'Digite algo para escolher uma das opções...',
  },
  listOptions: [
    'Primeira opção',
    'Segunda opção',
    'Terceira opção',
    'Quarta opção',
    'Quinta opção',
    'E por ai vai...',
  ],
};
Error.args = {
  labelText: 'Teste com erro',
  inputProps: {
    value: 'Um valor errado',
  },
  errorMessage: 'Temos um valor incorreto',
};
