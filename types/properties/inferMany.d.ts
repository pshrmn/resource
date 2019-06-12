import { InferableObject } from "@posh/ast";
import { ValueProperties } from "../types";
export default function inferMany(values: InferableObject): {
    [key: string]: ValueProperties;
};
