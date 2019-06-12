import { Expression, ObjectProperty, ObjectMethod } from "@babel/types";

export interface Resource<T> {
  name: string;
  output: string;
  sources(): Promise<Array<T>>;
  transform(value: T): Promise<Node | undefined>;
  api: API;
}

export type FileResourceOptions = Resource<string>;

export interface APIFn {
  props: APIProperties;
  ast(getter: APIProperties, name: string): ObjectProperty | ObjectMethod;
}

export interface APIProperties {
  [key: string]: any;
}

export type API = Array<APIFn>

export interface Value<T = unknown> {
  value: T;
  ast(value: any, directory?: string): Expression;
}

export interface Node {
  [key: string]: Value;
}

export interface ASTOptions {
  name: string;
  nodes: Array<Node>;
  directory: string;
  api: API;
}
