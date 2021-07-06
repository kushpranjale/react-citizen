import { Icon, IconProps } from "./Icon";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A987";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/Icon",
  component: Icon,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Empty", "Text"],
      defaultValue: "Empty",
      mapping: {
        Text: "Click Me!",
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<IconProps> = (args) => <Icon {...args} />;

/**
 * Default icon view
 */
export const Default: Story<IconProps> = Template.bind({});
Default.args = {};
