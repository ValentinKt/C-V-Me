import { ComponontDataList } from ".";

export default {
  title: "Components/ComponontDataList",
  component: ComponontDataList,
  argTypes: {
    type: {
      options: ["bullets", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "bullets",
    className: {},
    divClassName: {},
    groupClassName: {},
    frameClassName: {},
    text: "At vero eos et accusamus et",
    loremIpsumDolorClassName: {},
  },
};
