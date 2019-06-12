import "@babel/register";

import "jest";
import path from "path";
import * as fs from "fs-extra";

import { fileResource, findFiles, property, api } from "../src";

const FIXTURES = path.join(__dirname, "fixtures");
const OUTPUTS = path.join(__dirname, "outputs");
fs.ensureDirSync(OUTPUTS);

describe("fileResource", () => {
  it("outputs a module with expected content", async () => {
    const output = path.join(OUTPUTS, "basic.js");
    await fileResource({
      name: "basic",
      output,
      async sources() {
        return findFiles(
          path.join(FIXTURES, "pages", "*.js")
        );
      },
      async transform(filename) {
        const module = require(filename);
        return {
          source: property.dynamicImport(filename),
          title: property.infer(module.title),
          slug: property.infer(module.slug)
        };
      },
      api: [
        api.all("all"),
        api.find("slug"),
        api.find("test", "title")
      ]
    });
    const contents = (await fs.readFile(output)).toString();

    expect(contents).toEqual(`const basic = [{
  source: () => import("../fixtures/pages/one.js"),
  title: "One",
  slug: "one"
}, {
  source: () => import("../fixtures/pages/two.js"),
  title: "Two",
  slug: "two"
}];

const api = {
  all: () => basic,
  slug: value => basic.find(obj => obj.slug === value),
  test: value => basic.find(obj => obj.title === value)
};

export default api;
`)
  });
});
