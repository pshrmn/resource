import { types } from "@posh/ast";

import { ValueProperties } from "../types";

export default function date(...args: Array<any>) {
  return {
    ast,
    props: {
      args
    }
  };
}

function ast(props: ValueProperties) {
  return types.NEW({
    callee: types.ID("Date"),
    arguments: props.args.map(types.INFER)
  });
}
