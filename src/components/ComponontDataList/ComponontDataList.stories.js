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
    divClassNameOverride: {},
    divClassName1: {},
    loremIpsumDolorClassName: {},
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    frameClassName: {},
    text1: "At vero eos et accusamus et",
  },
};
