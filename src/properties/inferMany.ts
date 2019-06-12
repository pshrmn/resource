import infer from "./infer";

import { InferableObject } from "@posh/ast";
import { ValueProperties } from "../types";

export default function inferMany(values: InferableObject) {
  const properties: { [key: string]: ValueProperties } = {};
  for (let key in values) {
    properties[key] = infer(values[key]);
  }
  return properties;
}
