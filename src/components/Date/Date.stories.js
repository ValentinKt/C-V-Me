import { Date } from ".";

export default {
  title: "Components/Date",
  component: Date,
  argTypes: {
    percent: {
      options: ["sixty", "thirty", "eighty", "twenty", "one-hundred", "fifty", "ten", "forty", "ninety", "seventy"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    percent: "sixty",
    className: {},
    divClassName: {},
    text: "Name",
    backLineClassName: {},
    progressLineClassName: {},
    dotClassName: {},
  },
};
