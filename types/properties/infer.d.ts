import { Inferable } from "@posh/ast";
import { Value } from "../types";
export interface InferProps {
    value: Inferable;
}
export default function infer(value: Inferable): Value<InferProps>;
