import { SchoolEntrance, SchoolEntranceProps } from "./SchoolEntrance";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=671%3A410";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/SchoolEntrance",
  component: SchoolEntrance,
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
const Template: Story<SchoolEntranceProps> = (args) => (
  <SchoolEntrance {...args} />
);

/**
 * Component stories
 */
export const Default: Story<SchoolEntranceProps> = Template.bind({});
Default.args = {};