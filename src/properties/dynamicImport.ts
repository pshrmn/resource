import path from "path";
import { types } from "@posh/ast";

import { Value } from "../types";

export default function dynamicImport(path: string): Value<string> {
  return {
    value: path,
    ast
  };
}

function ast(value: string, directory: string) {
  return types.ARROW_FUNCTION(
    [],
    types.CALL(
      "import",
      [
        types.STRING(path.relative(directory, value))
      ]
    )
  );
}
