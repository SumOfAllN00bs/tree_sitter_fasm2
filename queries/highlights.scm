; Instructions
(instruction (mnemonic (identifier)) @function.builtin)

; Registers
(register) @variable.builtin

; Numbers
(number) @number
(expression (number)) @number

; Strings
(string) @string

; Comments
(comment) @comment

; Labels
(label_definition (identifier)) @label

; Identifiers
(identifier) @variable

; Directives
(directive) @keyword

; Operators
"+" @operator
"-" @operator
"*" @operator
"/" @operator

; Punctuation
"(" @punctuation.bracket
")" @punctuation.bracket
"[" @punctuation.bracket
"]" @punctuation.bracket
"," @punctuation.delimiter
":" @punctuation.delimiter

; Macro definition
(macro_definition (identifier)) @function.macro

(macro_params (identifier)) @variable.parameter

; Include statements
(include_statement) @include
(include_statement (string)) @string.special