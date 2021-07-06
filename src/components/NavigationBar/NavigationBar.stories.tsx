import { NavigationBar, NavigationBarProps } from "./NavigationBar";
import { Icon, IconFamily } from "../Icon/Icon";

import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1117";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/NavigationBar",
  component: NavigationBar,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Empty", "Icons"],
      defaultValue: "Empty",
      mapping: {
        Icons: (
          <>
            <Icon family={IconFamily.Calendar} />
            <Icon family={IconFamily.Goal} />
            <Icon family={IconFamily.Explore} />
            <Icon family={IconFamily.User} />
          </>
        ),
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<NavigationBarProps> = (args) => (
  <NavigationBar {...args} />
);

/**
 * Component stories
 */
export const Default: Story<NavigationBarProps> = Template.bind({});
Default.args = {};
