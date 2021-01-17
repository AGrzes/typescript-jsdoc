export class ClassUsingClassSyntax {
  /**
   * A comment
   * @param {String} param
   * @returns {string[]}
   */
  method(param) {}
}

export function ClassUsingFunctionSyntax() {
  /**
   * A comment
   * @param {String} param
   * @returns {string[]}
   */
  this.method = function(param) {}
}

export function ClassUsingFunctionPrototypeSyntax() {}

/**
 * A comment
 * @param {String} param
 * @returns {string[]}
 */
ClassUsingFunctionPrototypeSyntax.prototype.method = function(param) {}

export function ClassUsingFunctionAndPrototypeSyntax() {
  /**
   * A comment
   * @param {String} param
   * @returns {string[]}
   */
  this.method = function(param) {}
}

/**
 * A comment
 * @param {String} param
 * @returns {string[]}
 */
ClassUsingFunctionAndPrototypeSyntax.prototype.anotherMethod = function(param) {}
