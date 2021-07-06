import { ImpactStatement, ImpactStatementProps } from "./ImpactStatement";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1199";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/ImpactStatement",
  component: ImpactStatement,
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
const Template: Story<ImpactStatementProps> = (args) => (
  <ImpactStatement {...args} />
);

/**
 * Component stories
 */
export const Default: Story<ImpactStatementProps> = Template.bind({});
Default.args = {};
