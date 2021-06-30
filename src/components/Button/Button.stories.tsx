import { Button, ButtonProps } from "./Button";
import { Icon, IconFamily } from "../Icon/Icon";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=289%3A0";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Empty", "Text", "Icon", "IconWithText"],
      mapping: {
        Text: "👇 Click Me!",
        Icon: <Icon family={IconFamily.Shield} />,
        IconWithText: (
          <>
            <Icon family={IconFamily.Shield} />
            👇 Click Me!
          </>
        ),
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

/**
 * Component stories
 */
export const Default: Story<ButtonProps> = Template.bind({});
Default.args = {};
