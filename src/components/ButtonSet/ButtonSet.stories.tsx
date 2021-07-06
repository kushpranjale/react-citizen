import { ButtonSet, ButtonSetProps } from "./ButtonSet";
import { Button } from "../Button/Button";

import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1197";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/ButtonSet",
  component: ButtonSet,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Single", "Multiple"],
      defaultValue: "Single",
      mapping: {
        Single: <Button>Try Me!</Button>,
        Multiple: (
          <>
            <Button>Try Me!</Button>
            <Button>Try Me!</Button>
            <Button>Try Me!</Button>
          </>
        ),
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<ButtonSetProps> = (args) => <ButtonSet {...args} />;

/**
 * Component stories
 */
export const Default: Story<ButtonSetProps> = Template.bind({});
Default.args = {};
