import { ImpactQuiz, ImpactQuizProps } from "./ImpactQuiz";
import { ImpactQuizQuestion } from "../ImpactQuizQuestion/ImpactQuizQuestion";

import { Story } from "@storybook/react";
import { IconFamily } from "../Icon/Icon";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=824%3A1021";

/**
 * Storybook component configuration
 */
export default {
  title: "Onboarding/ImpactQuiz",
  component: ImpactQuiz,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Empty", "Single", "Multiple"],
      defaultValue: "Empty",
      mapping: {
        Single: (
          <>
            <ImpactQuizQuestion
              icon={IconFamily.Shield}
              summary="Question #1"
              description="Does this appear correct?"
              image=""
              onPositive={() => {}}
              onNegative={() => {}}
            />
          </>
        ),
        Multiple: (
          <>
            <ImpactQuizQuestion
              icon={IconFamily.Shield}
              summary="Question #1"
              description="Does this appear correct?"
              image=""
              onPositive={() => {}}
              onNegative={() => {}}
            />
            <ImpactQuizQuestion
              icon={IconFamily.Shield}
              summary="Question #2"
              description="Does this appear correct?"
              image=""
              onPositive={() => {}}
              onNegative={() => {}}
            />
          </>
        ),
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<ImpactQuizProps> = (args) => <ImpactQuiz {...args} />;

/**
 * Component stories
 */
export const Default: Story<ImpactQuizProps> = Template.bind({});
Default.args = {};
