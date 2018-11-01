/*!
 * assert.js - assertions for javascript
 * Copyright (c) 2018, Christopher Jeffrey (MIT License).
 * https://github.com/chjj/bsert
 */

'use strict';

/**
 * AssertionError
 */

class AssertionError extends Error {
  constructor(options) {
    if (typeof options === 'string')
      options = { message: options };

    if (options === null || typeof options !== 'object')
      options = {};

    let message = '';
    let operator = '!=';
    let generatedMessage = false;

    if (options.message != null)
      message = toString(options.message);

    if (typeof options.operator === 'string')
      operator = options.operator;

    if (!message) {
      const a = stringify(options.actual);
      const b = stringify(options.expected);

      message = `${a} ${operator} ${b}`;
      generatedMessage = true;
    }

    super(message);

    let start = this.constructor;

    if (typeof options.start === 'function')
      start = options.start;
    else if (typeof options.stackStartFn === 'function')
      start = options.stackStartFn;
    else if (typeof options.stackStartFunction === 'function')
      start = options.stackStartFunction;

    this.type = 'AssertionError';
    this.name = 'AssertionError [ERR_ASSERTION]';
    this.code = 'ERR_ASSERTION';
    this.generatedMessage = generatedMessage;
    this.actual = options.actual;
    this.expected = options.expected;
    this.operator = operator;

    if (Error.captureStackTrace)
      Error.captureStackTrace(this, start);
  }
}

/**
 * Assert
 */

function assert(value, message) {
  if (!value) {
    throw new AssertionError({
      message,
      actual: false,
      expected: true,
      operator: '==',
      start: assert
    });
  }
}

assert.ok = assert;

assert.equal = function equal(actual, expected, message) {
  if (actual !== expected) {
    throw new AssertionError({
      message,
      actual,
      expected,
      operator: '===',
      start: equal
    });
  }
};

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual === expected) {
    throw new AssertionError({
      message,
      actual,
      expected,
      operator: '!==',
      start: notEqual
    });
  }
};

assert.strictEqual = assert.equal;

assert.notStrictEqual = assert.notEqual;

assert.fail = function fail(message) {
  if (message == null || message === '')
    message = 'Failed';

  throw new AssertionError({
    message,
    actual: false,
    expected: true,
    operator: '==',
    start: fail
  });
};

assert.enforce = function enforce(value, name, type) {
  if (!value) {
    const err = new TypeError(`'${name}' must be a(n) ${type}.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, enforce);
    throw err;
  }
};

assert.range = function range(value, name) {
  if (!value) {
    const err = new RangeError(`'${name}' is out of range.`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, range);
    throw err;
  }
};

/*
 * Helpers
 */

function stringify(value) {
  switch (typeof value) {
    case 'undefined':
      return 'undefined';
    case 'object':
      if (value === null)
        return 'null';

      if (!value.constructor
          || typeof value.constructor.name !== 'string'
          || value.constructor.name === 'Object') {
        return '[Object]';
      }

      return `[Object: ${value.constructor.name}]`;
    case 'boolean':
      return value.toString();
    case 'number':
      return value.toString(10);
    case 'string':
      if (value.length > 64)
        value = `${value.substring(0, 61)}...`;
      return JSON.stringify(value);
    case 'symbol':
      return value.toString();
    case 'function':
      if (typeof value.name !== 'string')
        return '[Function]';
      return `[Function: ${value.name}]`;
    case 'bigint':
      return `${value.toString()}n`;
    default:
      return '[Unknown]';
  }
}

function toString(str) {
  if (typeof str === 'string')
    return str;

  return stringify(str);
}

/*
 * Expose
 */

assert.AssertionError = AssertionError;
assert.assert = assert;
assert.strict = assert;

module.exports = assert;
