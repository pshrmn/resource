import * as fs from "fs-extra";
import path from "path";

import dataToString from "../ast";

import {
  FileResourceOptions,
  Node
} from "../types";

export default async function fileResource(options: FileResourceOptions) {
  const { sources, transform, output, name, api } = options;
  const filenames = await sources();
  const nodes = (await Promise.all(filenames.map(transform)))
    .filter(node => node !== undefined) as Array<Node>;
  const ast = dataToString({
    name,
    nodes,
    directory: path.dirname(output),
    api
  });
  await fs.writeFile(output, ast);
}
