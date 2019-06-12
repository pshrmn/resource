import path from "path";
import { types } from "@posh/ast";

import { ValueProperties } from "../types";

export default function dynamicImport(path: string) {
  return {
    ast,
    props: {
      path
    }
  };
}

function ast(props: ValueProperties, directory: string) {
  return types.ARROW_FUNCTION(
    [],
    types.CALL(
      "import",
      [
        types.STRING(path.relative(directory, props.path))
      ]
    )
  );
}
