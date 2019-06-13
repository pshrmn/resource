import { types, stringify } from "@posh/ast";

import { ASTOptions } from "../types";

export default function dataToString(options: ASTOptions) {
  const {
    name,
    nodes,
    directory,
    api: apiFns
  } = options;
  const arr = types.CONST({
    name,
    init: types.ARRAY(
      nodes.map(node => {
        return (
          types.OBJECT(
            Object.keys(node).map(key => {
              const prop = node[key];
              return (
                types.OBJECT_PROP({
                  key: types.ID(key),
                  value: prop.ast(prop.props, directory)
                })
              );
            })
          )
        );
      })
    )
  });

  const api = types.CONST({
    name: "api",
    init: types.OBJECT(
      apiFns.map(fn => fn.ast(fn.props, name))
    )
  });

  const exports = types.EXPORT_DEFAULT(
    types.ID("api")
  );

  return stringify`${arr}

${api}

${exports}
`;
}

