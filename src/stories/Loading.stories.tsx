import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Loading, Props } from '../components/Loading';

const meta: Meta = {
  title: 'Loading',
  component: Loading,
};

export default meta;

const Template: StoryFn<Props> = args => <Loading {...args} />;

export const Default = Template.bind({});

Default.args = { size: 'xl' };
