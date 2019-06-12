import { ValueProperties } from "../types";
export default function date(...args: Array<any>): {
    ast: typeof ast;
    props: {
        args: any[];
    };
};
declare function ast(props: ValueProperties): import("@babel/types").NewExpression;
export {};
