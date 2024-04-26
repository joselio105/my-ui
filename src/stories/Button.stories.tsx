import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, Props } from '../components/Button';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: StoryFn<Props> = args => (
  <BrowserRouter>
    <Button {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Loading = Template.bind({});

Default.args = { children: 'Botão' };
Secondary.args = { children: 'Botão', isSecondary: true };
Loading.args = { children: 'Botão', isLoading: true };
