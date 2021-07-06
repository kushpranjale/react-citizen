import { OnboardingPage, OnboardingPageProps } from "./OnboardingPage";
import { RoleSelection } from "../RoleSelection/RoleSelection";

import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1203";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/OnboardingPage",
  component: OnboardingPage,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["RoleSelection"],
      defaultValue: "RoleSelection",
      mapping: {
        RoleSelection: (
          <RoleSelection
            onStudentForward={() => {}}
            onTeacherForward={() => {}}
          />
        ),
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<OnboardingPageProps> = (args) => (
  <OnboardingPage {...args} />
);

/**
 * Component stories
 */
export const Default: Story<OnboardingPageProps> = Template.bind({});
Default.args = {};
