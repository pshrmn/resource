import { Value } from "../types";
export interface DateProps {
    args: Array<any>;
}
export default function date(...args: Array<any>): Value<DateProps>;
