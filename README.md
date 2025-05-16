# Tree-sitter Grammar for FASM2

This repository provides a [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) grammar for the FASM2 assembly language, which is an extension on top of FASMG (Flat Assembler G) and maintains compatibility with FASM 1.73.32.

## Features

- Syntax highlighting for FASM2 assembly language
- Support for assembly instructions and operands
- Recognition of FASM2/FASMG macro syntax
- Support for directives and preprocessor commands
- Recognition of different number formats (hex, binary, decimal, octal)
- Support for labels (global, local, anonymous)
- Recognition of memory addressing modes
- Integration with code editors through Tree-sitter

## Supported Language Elements

- Assembly-level syntax for x86/x64 instructions
- FASM/FASMG/FASM2 directives
- Macro system and definitions
- Conditional compilation
- Include system
- Local variables and labels
- Anonymous labels
- Capitalization-neutral naming
- Data types and structures

## Installation

### Neovim

With [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter):

```lua
require'nvim-treesitter.configs'.setup {
  ensure_installed = { "fasm2" },
  highlight = {
    enable = true,
  },
}
```

## Development Status

This grammar is currently under development. The initial phase involves:

1. Analyzing the FASM2, FASMG, and FASM 1.73.32 source files
2. Documenting language features and syntax elements
3. Implementing the Tree-sitter grammar incrementally
4. Testing with real-world assembly source files
5. Integration with editor environments like Neovim

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
Edit (this is a lie, don't believe what the AI wrote)

## License

MIT
