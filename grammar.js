/**
 * @file Tree-sitter grammar for fasm2
 * @author SumOfAllN00bs <discordshards@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fasm2",

  extras: $ => [
    /\s|\\\r?\n/,
    $.comment,
  ],

  conflicts: $ => [
    [$.expression, $.operand],
    [$.instruction],
    [$.directive],
    [$.directive_arguments, $.expression],
    [$.identifier, $.expression],
    [$.directive_arguments],
    [$.mnemonic, $.macro_params],
    [$.directive, $.macro_definition],
  ],

  rules: {
    source_file: $ => repeat(choice(
      $.directive,
      $.instruction,
      $.label_definition,
      $.comment,
      $.include_statement,
      $.macro_definition,
    )),

    comment: $ => token(seq(
      ';',
      /.*/
    )),

    identifier: $ => /[a-zA-Z_?][a-zA-Z0-9_$.?]*/,

    label_definition: $ => choice(
      seq(field('name', $.identifier), ':'),
      seq('@@', ':'),
      seq(/\.[a-zA-Z0-9_$.?]+/, ':')
    ),

    register: $ => {
      const registers = [
        'al', 'cl', 'dl', 'bl', 'ah', 'ch', 'dh', 'bh', 'spl', 'bpl', 'sil', 'dil',
        'ax', 'cx', 'dx', 'bx', 'sp', 'bp', 'si', 'di',
        'eax', 'ecx', 'edx', 'ebx', 'esp', 'ebp', 'esi', 'edi',
        'rax', 'rcx', 'rdx', 'rbx', 'rsp', 'rbp', 'rsi', 'rdi',
        'r8', 'r9', 'r10', 'r11', 'r12', 'r13', 'r14', 'r15',
        'r8d', 'r9d', 'r10d', 'r11d', 'r12d', 'r13d', 'r14d', 'r15d',
        'r8w', 'r9w', 'r10w', 'r11w', 'r12w', 'r13w', 'r14w', 'r15w',
        'r8b', 'r9b', 'r10b', 'r11b', 'r12b', 'r13b', 'r14b', 'r15b',
        'cs', 'ds', 'es', 'fs', 'gs', 'ss',
        'st0', 'st1', 'st2', 'st3', 'st4', 'st5', 'st6', 'st7', 'st',
        'mm0', 'mm1', 'mm2', 'mm3', 'mm4', 'mm5', 'mm6', 'mm7',
        'xmm0', 'xmm1', 'xmm2', 'xmm3', 'xmm4', 'xmm5', 'xmm6', 'xmm7',
        'xmm8', 'xmm9', 'xmm10', 'xmm11', 'xmm12', 'xmm13', 'xmm14', 'xmm15',
        'ymm0', 'ymm1', 'ymm2', 'ymm3', 'ymm4', 'ymm5', 'ymm6', 'ymm7',
        'ymm8', 'ymm9', 'ymm10', 'ymm11', 'ymm12', 'ymm13', 'ymm14', 'ymm15',
      ];
      return choice(...registers.map(r => 
        alias(new RegExp(r, 'i'), $.register_name)
      ));
    },

    register_name: $ => /[a-zA-Z0-9]+/,

    number: $ => choice(
      /[0-9]+/,                 // Decimal
      /0x[0-9a-fA-F]+/,         // Hex with 0x prefix
      /[0-9a-fA-F]+h/,          // Hex with h suffix
      /[01]+b/,                 // Binary
      /[0-7]+o/,                // Octal with o
      /[0-7]+q/                 // Octal with q
    ),

    string: $ => choice(
      seq('"', repeat(choice(/[^"\n\\]/, /\\./)), '"'),
      seq("'", repeat(choice(/[^'\n\\]/, /\\./)), "'"),
    ),

    instruction: $ => prec.right(seq(
      $.mnemonic,
      optional($.operand_list)
    )),

    mnemonic: $ => prec(1, $.identifier),

    operand_list: $ => seq(
      $.operand,
      repeat(seq(',', $.operand))
    ),

    operand: $ => choice(
      $.register,
      $.number,
      $.string,
      $.identifier,
      $.memory_reference,
      $.expression
    ),

    memory_reference: $ => seq(
      '[',
      choice(
        $.identifier,
        $.register,
        $.expression,
        seq($.register, '+', $.expression),
        seq($.register, '-', $.expression),
      ),
      ']'
    ),

    expression: $ => prec(1, choice(
      $.number,
      $.identifier,
      seq('(', $.expression, ')'),
      prec.left(1, seq($.expression, '+', $.expression)),
      prec.left(1, seq($.expression, '-', $.expression)),
      prec.left(2, seq($.expression, '*', $.expression)),
      prec.left(2, seq($.expression, '/', $.expression)),
    )),

    directive: $ => prec(1, seq(
      choice(
        'format',
        'use',
        'org',
        'db', 'dw', 'dd', 'dq', 'dt',
        'rb', 'rw', 'rd', 'rq', 'rt',
        'macro', 'endm',
        'if', 'else', 'end if', 'end',
        'struct', 'ends',
        'virtual', 'section', 'segment',
        'calminstruction', 'end calminstruction',
        'repeat', 'end repeat',
        'while', 'end while',
        'define', 'display',
        'match', 'end match'
      ),
      optional($.directive_arguments)
    )),

    directive_arguments: $ => prec.left(repeat1(choice(
      $.identifier,
      $.number,
      $.string,
      $.expression,
      $.register
    ))),

    include_statement: $ => seq(
      'include',
      $.string
    ),

    macro_definition: $ => prec(2, seq(
      'macro',
      $.identifier,
      optional($.macro_params),
      repeat(choice(
        $.instruction,
        $.directive,
        $.label_definition,
        $.comment
      )),
      'endm'
    )),

    macro_params: $ => prec(2, seq(
      $.identifier,
      repeat(seq(',', $.identifier)),
      optional(/&/)
    )),
  }
});