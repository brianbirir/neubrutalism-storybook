import { Input } from "./Input";
import type { Meta, StoryObj } from '@storybook/react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const inputMeta: Meta<typeof Input> = {
    title: 'General/Input',
    component: Input,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },
};

export default inputMeta;

type Story = StoryObj<typeof Input>

export const General: Story = {
  args: {
    placeholder: 'General text field',
  },
};