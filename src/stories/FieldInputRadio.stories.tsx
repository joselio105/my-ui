import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FieldInputRadio, Props } from '../components/FieldInputRadio';
import { Check, Equal, User, X } from 'lucide-react';

const meta: Meta = {
  title: 'FieldInputRadio',
  component: FieldInputRadio,
};

export default meta;

const Template: StoryFn<Props> = args => <FieldInputRadio {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Teste',
  radios: [
    {
      labelText: 'Não',
      labelIcon: <X />,
      inputProps: { value: '0', name: 'teste', id: 'teste0' },
    },
    {
      labelText: 'Talvez',
      labelIcon: <Equal />,
      inputProps: { value: 'x', name: 'teste', id: 'testex', checked: true },
    },
    {
      labelText: 'Sim',
      labelIcon: <Check />,
      inputProps: { value: '1', name: 'teste', id: 'teste1' },
    },
    {
      labelText: '???',
      labelIcon: <User />,
      inputProps: { value: '2', name: 'teste', id: 'teste2' },
    },
  ],
};
