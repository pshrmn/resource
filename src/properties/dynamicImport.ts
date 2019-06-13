import path from "path";
import { types } from "@posh/ast";

import { Value } from "../types";

export interface DynamicImportProps {
  path: string;
}

export default function dynamicImport(path: string): Value<DynamicImportProps> {
  return {
    ast,
    props: {
      path
    }
  };
}

function ast(props: DynamicImportProps) {
  return types.ARROW_FUNCTION({
    body: types.CALL({
      callee: "import",
      arguments: [
        types.STRING(props.path)
      ]
    })
  });
}
