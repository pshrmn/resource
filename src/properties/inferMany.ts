import infer from "./infer";

import { InferableObject } from "@posh/ast";
import { Value } from "../types";
import { InferProps } from "./infer";

export interface InferredProperties {
  [key: string]: Value<InferProps>
}

export default function inferMany(values: InferableObject) {
  const properties: InferredProperties = {};
  for (let key in values) {
    properties[key] = infer(values[key]);
  }
  return properties;
}
