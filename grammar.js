/**
 * @file Parser for fasm2
 * @author SumOfAllN00bs <discordshards@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fasm2",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
