import { RoleSelection, RoleSelectionProps } from "./RoleSelection";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=671%3A409";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/RoleSelection",
  component: RoleSelection,
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
const Template: Story<RoleSelectionProps> = (args) => (
  <RoleSelection {...args} />
);

/**
 * Component stories
 */
export const Default: Story<RoleSelectionProps> = Template.bind({});
Default.args = {};
