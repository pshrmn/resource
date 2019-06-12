import { ValueProperties } from "../types";
export default function dynamicImport(path: string): {
    ast: typeof ast;
    props: {
        path: string;
    };
};
declare function ast(props: ValueProperties, directory: string): import("@babel/types").ArrowFunctionExpression;
export {};
