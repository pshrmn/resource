import { Value } from "../types";
export interface DynamicImportProps {
    path: string;
}
export default function dynamicImport(path: string): Value<DynamicImportProps>;
