import * as BABEL_TYPES from "@babel/types";
import { types } from "@posh/ast";

import { APIFn, APIProperties } from "../types";

export default function find(name: string, property?: string): APIFn {
  return {
    ast,
    props: {
      name,
      property: property || name
    }
  }
}

function ast(props: APIProperties, name: string) {
  return (
    types.OBJECT_PROP(
      types.ID(props.name),
      types.ARROW_FUNCTION(
        [types.ID("value")],
        types.CALL(
          types.MEMBER(types.ID(name), types.ID("find")),
          [
            types.ARROW_FUNCTION(
              [types.ID("obj")],
              BABEL_TYPES.binaryExpression(
                "===",
                types.MEMBER(types.ID("obj"), types.ID(props.property)),
                types.ID("value")
              )
            )
          ]
        )
      )
    )
  );
}