import { ValueProperties } from "../types";
export default function infer(value: any): {
    ast: typeof ast;
    props: {
        value: any;
    };
};
declare function ast(props: ValueProperties): import("@babel/types").Expression;
export {};
