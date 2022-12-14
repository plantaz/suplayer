import { Meta, StoryObj } from "@storybook/react";

import { InputContainer, InputContainerProps } from ".";

export default {
  title: "Atoms/InputContainer",
  component: InputContainer,
  args: {
    placeholder: "Placeholder",
    type: "text",
  },
} as Meta<InputContainerProps>;

export const Default: StoryObj<InputContainerProps> = {
  args: {},
};
