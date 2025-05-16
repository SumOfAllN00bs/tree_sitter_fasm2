# FASM2 Tree-sitter Grammar Development

This document outlines the development process, current status, and planned steps for the tree-sitter-fasm2 project.

## Current Status

- ✅ Project initialized with tree-sitter init
- ✅ Initial grammar structure defined in grammar.js
- ✅ Basic test files created in test/corpus
- ✅ Syntax highlighting queries defined in highlights.scm
- ✅ Code folding rules defined in folds.scm
- ✅ Basic documentation in README.md

## Development Plan

### Phase 1: Basic Syntax Support (In Progress)

- [ ] Implement basic instruction parsing
- [ ] Support for labels (global, local, anonymous)
- [ ] Support for basic operand types (registers, immediate values)
- [ ] Memory addressing modes
- [ ] Basic directives (format, use, org, etc.)
- [ ] Test against simple assembly programs
- [ ] Verify syntax highlighting in Neovim

### Phase 2: Advanced Language Features

- [ ] Implement macro system support
- [ ] Support for FASMG/FASM2 calm instructions
- [ ] Conditional compilation directives
- [ ] Local variables and namespaces
- [ ] Expression evaluation
- [ ] Include system
- [ ] Structure definitions
- [ ] Expand test coverage
- [ ] Improve syntax highlighting for advanced features

### Phase 3: Optimizations and Refinements

- [ ] Performance optimizations
- [ ] Fix edge cases and bugs
- [ ] Improve error handling and recovery
- [ ] Complete documentation of language elements
- [ ] Add comprehensive examples
- [ ] Ensure compatibility with FASM2, FASMG, and FASM 1.73.32 syntax

### Phase 4: Editor Integration

- [ ] Complete Neovim integration via nvim-treesitter
- [ ] Create configuration examples for other editors
- [ ] Add indentation rules
- [ ] Improve folding behavior for complex structures
- [ ] Document editor-specific features

## Feature Analysis

Based on FASM2, FASMG, and FASM 1.73.32 source code analysis, the following features need to be supported:

### Instruction Set
- [ ] x86/x64 instruction mnemonics
- [ ] Register operands (general purpose, FPU, SSE/AVX, etc.)
- [ ] Memory operands with various addressing modes
- [ ] Immediate values in different formats (dec, hex, bin, etc.)

### Directives
- [ ] Data definition (db, dw, dd, etc.)
- [ ] Reserve space directives (rb, rw, rd, etc.)
- [ ] Format selection (PE, ELF, etc.)
- [ ] Section/segment definitions
- [ ] Virtual and align directives
- [ ] Symbol definition and manipulation

### Macro System
- [ ] Macro definition and invocation
- [ ] Parameter handling
- [ ] Block macros with braces
- [ ] Lambda-style macros
- [ ] Substitution operators
- [ ] CALM instructions for advanced macros

### Control Structures
- [ ] Conditional assembly (if/else/end if)
- [ ] Loops (repeat, while)
- [ ] Pattern matching (match)
- [ ] Iteration constructs (irp, iterate)

### Symbol Handling
- [ ] Labels (global, local, anonymous)
- [ ] Capitalization-neutral symbols
- [ ] Namespaces
- [ ] Equates and constants

## Testing Methodology

- Use real-world FASM2 code from examples directory
- Create specific test cases for each language feature
- Use tree-sitter's test framework for validation
- Manual testing in Neovim with nvim-treesitter

## Resources

- FASM2 source code in `fasm/fasm2/`
- FASMG source code in `fasm/fasmg.kp60/`
- FASM 1.73.32 source code in `fasm/fasm-1.73.32/`
- Existing documentation in HTML files
- Example programs in `fasm/fasm2/examples/`

## Contributors

- SumOfAllN00bs (Project initiator)

## License

MIT