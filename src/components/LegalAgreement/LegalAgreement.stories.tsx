import { LegalAgreement, LegalAgreementProps } from "./LegalAgreement";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=670%3A571";

/**
 * Storybook component configuration
 */
export default {
  title: "Library/LegalAgreement",
  component: LegalAgreement,
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
const Template: Story<LegalAgreementProps> = (args) => (
  <LegalAgreement {...args} />
);

/**
 * Component stories
 */
export const Default: Story<LegalAgreementProps> = Template.bind({});
Default.args = {};