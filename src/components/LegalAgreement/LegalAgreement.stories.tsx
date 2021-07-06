import { LegalAgreement, LegalAgreementProps } from "./LegalAgreement";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1201";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/LegalAgreement",
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
