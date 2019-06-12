import { types } from "@posh/ast";

import { APIFn, APIProperties } from "../types";

export default function all(name: string): APIFn {
  return {
    ast,
    props: {
      name
    }
  }
}

function ast(props: APIProperties, name: string) {
  return (
    types.OBJECT_PROP(
      types.ID(props.name),
      types.ARROW_FUNCTION(
        [],
        types.ID(name)
      )
    )
  );
}