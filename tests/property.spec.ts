import "jest";

import { stringify, types } from "@posh/ast";

import { property } from "../src";

describe("property functions", () => {
  describe("infer", () => {
    it("returns an inferred value", () => {
      const pairs = [
        [7, `7;`],
        ["test", `"test";`],
        [[1, 2], `[1, 2];`]
      ];
      pairs.forEach(([ input, output ]) => {
        const obj = property.infer(input);
        const value = types.AS_STATEMENT(
          obj.ast(obj.props)
        );
        expect(
          stringify`${value}`
        ).toBe(output);
      });
    })
  });

  describe("inferMany", () => {
    it("flattens object's properties", () => {
      const obj = {
        one: 1,
        two: "two"
      };
      const inferrers = property.inferMany(obj);
      const values = Object.keys(inferrers).reduce((acc, key) => {
        const curr = inferrers[key];
        const value = curr.ast(curr.props);
        acc.push(
          types.OBJECT_PROP({ key: types.ID(key), value })
        );
        return acc;
      }, []);
      const value = types.AS_STATEMENT(
        types.OBJECT(values)
      );

      expect(
        stringify`${value}`
      ).toBe(`({
  one: 1,
  two: "two"
});`);
    });
  });

  describe("dynamicImport", () => {
    it("returns a function that calls import() with the provided path", () => {
      const path = "@posh/resource";
      const dynImp = property.dynamicImport(path);
      const value = types.AS_STATEMENT(
        dynImp.ast(dynImp.props)
      );
      expect(
        stringify`${value}`
      ).toBe(`() => import("@posh/resource");`)
    });
  });

  describe("date", () => {
    it("returns a call to the Date function with the provided arguments", () => {
      const pairs = [
        [[2019, 6, 12], `new Date(2019, 6, 12);`],
        [["2019-6-12"], `new Date("2019-6-12");`]
      ];
      pairs.forEach(([ input, output ]) => {
        // using .apply to make input as an array easier
        const obj = property.date.apply(null, input);
        const value = types.AS_STATEMENT(
          obj.ast(obj.props)
        );
        expect(
          stringify`${value}`
        ).toBe(output);
      });
    });
  });
});
