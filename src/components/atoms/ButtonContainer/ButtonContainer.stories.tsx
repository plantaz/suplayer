import { Meta, StoryObj } from "@storybook/react";

import { ButtonContainer, ButtonContainerProps } from ".";

export default {
  title: "Atoms/ButtonContainer",
  component: ButtonContainer,
  args: {
    children: "Button",
  },
} as Meta<ButtonContainerProps>;

export const Default: StoryObj<ButtonContainerProps> = {
  args: {},
};
