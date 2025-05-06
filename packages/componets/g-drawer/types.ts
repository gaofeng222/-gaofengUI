import { ExtractPropTypes } from "vue";

export const gDrawerProps = {
  visible: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
  direction: {
    type: String,
    default: "btt",
  },
};

export type GDrawerTypes = ExtractPropTypes<typeof gDrawerProps>;
