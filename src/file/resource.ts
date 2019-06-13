import * as fs from "fs-extra";
import path from "path";

import dataToString from "../ast";

import {
  FileResourceOptions,
  FileResourceHelpers,
  Node
} from "../types";

export default async function fileResource(options: FileResourceOptions) {
  const { sources, transform, output, name, api } = options;
  const filenames = await sources();

  const directory = path.dirname(output);

  const helpers: FileResourceHelpers = {
    relative(loc: string): string {
      return path.relative(directory, loc)
    }
  };

  const nodes = (
      await Promise.all(filenames.map(filename => {
        return transform(filename, helpers);
      }))
    )
    .filter(node => node !== undefined) as Array<Node>;

  const ast = dataToString({
    name,
    nodes,
    api
  });

  await fs.writeFile(output, ast);
}
