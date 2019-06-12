import { types } from "@posh/ast";

import { ValueProperties } from "../types";

export default function infer(value: any) {
  return {
    ast,
    props: {
      value
    }
  };
}

function ast(props: ValueProperties) {
  return types.INFER(props.value);
}