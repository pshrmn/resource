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
    types.OBJECT_PROP({
      key: types.ID(props.name),
      value: types.ARROW_FUNCTION({
        params: [types.ID("value")],
        body: types.CALL({
          callee: types.MEMBER({
            object: types.ID(name),
            property: types.ID("find")
          }),
          arguments: [
            types.ARROW_FUNCTION({
              params: [types.ID("obj")],
              body: types.BINARY({
                left: types.MEMBER({
                  object: types.ID("obj"),
                  property: types.ID(props.property)
                }),
                operator: "===",
                right: types.ID("value")
              })
            })
          ]
        })
      })
    })
  );
}
