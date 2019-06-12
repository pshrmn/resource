import { types } from "@posh/ast";

import { Value } from "../types";

export default function infer(value: any): Value<any> {
  return {
    value,
    ast
  };
}

function ast(value: any) {
  return types.INFER(value);
}