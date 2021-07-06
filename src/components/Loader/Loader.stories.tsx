import { Loader, LoaderProps } from "./Loader";
import { Story } from "@storybook/react";

/**
 * URL to the component design
 */
const figmaURL =
  "https://www.figma.com/file/dsuWBjMOUD1ek4l1shHyBM/LOCAL-ON-BOARDING-COMPONENTS?node-id=818%3A1181";

/**
 * Storybook component configuration
 */
export default {
  title: "Core/Loader",
  component: Loader,
  parameters: {
    design: {
      type: "figma",
      url: figmaURL,
    },
  },
  argTypes: {
    children: {
      options: ["Content"],
      defaultValue: "Content",
      mapping: {
        Content: "✅ Loaded",
      },
    },
  },
};

/**
 * Component storybook template
 */
const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

/**
 * Component stories
 */
export const Default: Story<LoaderProps> = Template.bind({});
Default.args = {};
