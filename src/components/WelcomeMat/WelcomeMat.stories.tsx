import { WelcomeMat, WelcomeMatProps } from "./WelcomeMat";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=819%3A1010";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/WelcomeMat",
  component: WelcomeMat,
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
const Template: Story<WelcomeMatProps> = (args) => <WelcomeMat {...args} />;

/**
 * Component stories
 */
export const Default: Story<WelcomeMatProps> = Template.bind({});
Default.args = {};
