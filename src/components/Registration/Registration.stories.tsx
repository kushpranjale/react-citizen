import { Registration, RegistrationProps } from "./Registration";
import { TextField } from "../TextField/TextField";

import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1205";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/Registration",
  component: Registration,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Empty"],
      defaultValue: "Empty",
      mapping: {
        Registration: (
          <>
            <TextField title="First Name"></TextField>
            <TextField title="Last Name"></TextField>
            <TextField title="Email"></TextField>
            <TextField title="Grade"></TextField>
            <TextField title="Password"></TextField>
            <TextField title="Confirm Password"></TextField>
          </>
        ),
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<RegistrationProps> = (args) => <Registration {...args} />;

/**
 * Component stories
 */
export const Default: Story<RegistrationProps> = Template.bind({});
Default.args = {};
