import { ComponentTitle } from ".";

export default {
  title: "Components/ComponentTitle",
  component: ComponentTitle,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    divClassName: {},
    rectangleClassName: {},
    className: {},
    divClassNameOverride: {},
    text: "DATA TITLE",
    rectangleClassNameOverride: {},
  },
};
