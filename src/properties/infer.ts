import { types } from "@posh/ast";

import { Inferable } from "@posh/ast";
import { Value } from "../types";

export interface InferProps {
  value: Inferable;
}

export default function infer(value: Inferable): Value<InferProps> {
  return {
    ast,
    props: {
      value
    }
  };
}

function ast(props: InferProps) {
  return types.INFER(props.value);
}