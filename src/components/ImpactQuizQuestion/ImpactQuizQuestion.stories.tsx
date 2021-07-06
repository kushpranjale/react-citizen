import {
  ImpactQuizQuestion,
  ImpactQuizQuestionProps,
} from "./ImpactQuizQuestion";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1120";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/ImpactQuizQuestion",
  component: ImpactQuizQuestion,
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
const Template: Story<ImpactQuizQuestionProps> = (args) => (
  <ImpactQuizQuestion {...args} />
);

/**
 * Component stories
 */
export const Default: Story<ImpactQuizQuestionProps> = Template.bind({});
Default.args = {};
