import { Button, ButtonProps } from "./Button";
import { Icon, IconFamily } from "../Icon/Icon";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1195";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    color: {
      defaultValue: "primary",
    },
    children: {
      options: ["Empty", "Text", "Icon", "IconWithText"],
      defaultValue: "Text",
      mapping: {
        Empty: "",
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
