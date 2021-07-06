import { TextField, TextFieldProps } from "./TextField";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1211";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/TextField",
  component: TextField,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

/**
 * Component stories
 */
export const Default: Story<TextFieldProps> = Template.bind({});
Default.args = {};
