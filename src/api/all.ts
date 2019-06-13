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
    types.OBJECT_PROP({
      key: types.ID(props.name),
      value: types.ARROW_FUNCTION({
        body: types.ID(name)
      })
    })
  );
}