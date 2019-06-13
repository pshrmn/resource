import { Expression, ObjectProperty, ObjectMethod } from "@babel/types";
export interface Resource<T, H> {
    name: string;
    output: string;
    sources(): Promise<Array<T>>;
    transform(value: T, helpers: H): Promise<Node | undefined>;
    api: API;
}
export interface FileResourceHelpers {
    relative(p: string): string;
}
export declare type FileResourceOptions = Resource<string, FileResourceHelpers>;
export interface APIFn {
    props: APIProperties;
    ast(getter: APIProperties, name: string): ObjectProperty | ObjectMethod;
}
export interface APIProperties {
    [key: string]: any;
}
export declare type API = Array<APIFn>;
export interface ValueProperties<T> {
    [key: string]: Value<T>;
}
export interface Value<T> {
    props: T;
    ast(props: T): Expression;
}
export interface Node {
    [key: string]: Value<unknown>;
}
export interface ASTOptions {
    name: string;
    nodes: Array<Node>;
    api: API;
}
