export function ClassUsingFunctionSyntax(): void;
export class ClassUsingFunctionSyntax {
    /**
     * A comment
     * @param {String} param
     * @returns {string[]}
     */
    method: (param: string) => string[];
}
export function ClassUsingFunctionPrototypeSyntax(): void;
export class ClassUsingFunctionPrototypeSyntax {
    method(param: string): string[];
}
export function ClassUsingFunctionAndPrototypeSyntax(): void;
export class ClassUsingFunctionAndPrototypeSyntax {
    /**
     * A comment
     * @param {String} param
     * @returns {string[]}
     */
    method: (param: string) => string[];
    anotherMethod(param: string): string[];
}
export class ClassUsingClassSyntax {
    /**
     * A comment
     * @param {String} param
     * @returns {string[]}
     */
    method(param: string): string[];
}
