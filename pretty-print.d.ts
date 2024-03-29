export declare function setWidth(width?: number): void;
export declare type ColorName = "property" | "sep" | "braces" | "nil" | "boolean" | "number" | "string" | "quotes" | "escape" | "function" | "thread" | "object" | "regexp" | "json" | "err" | "success" | "failure" | "highlight";
export interface ITheme {
    property: string;
    braces: string;
    sep: string;
    nil: string;
    boolean: string;
    number: string;
    string: string;
    quotes: string;
    escape: string;
    function: string;
    thread: string;
    object: string;
    regexp: string;
    json: string;
    err: string;
    success: string;
    failure: string;
    highlight: string;
}
export declare const themes: {
    [num: number]: ITheme;
};
export declare function setTheme(newTheme: ITheme | number): void;
export declare function color(colorName?: ColorName): string;
export declare function colorize(colorName: ColorName, str: string, resetName?: ColorName): string;
export declare function prettyPrint(val: any, depthLeft?: number, indent?: number): string;
export declare function p(...args: any[]): void;
