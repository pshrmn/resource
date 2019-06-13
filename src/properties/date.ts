import { types } from "@posh/ast";

import { Value } from "../types";

export interface DateProps {
  args: Array<any>;
}

export default function date(...args: Array<any>): Value<DateProps> {
  return {
    ast,
    props: {
      args
    }
  };
}

function ast(props: DateProps) {
  return types.NEW({
    callee: types.ID("Date"),
    arguments: props.args.map(types.INFER)
  });
}
