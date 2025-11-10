# TSMark

> A fully type-safe, efficient TypeScript Markdown parser

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.21.0-orange.svg)](https://pnpm.io/)

## ⚠️ Work In Progress

TSMark is currently under active development. The core type system is implemented, but the parser, lexer, and renderer are not yet available.

## Overview

TSMark is a modern TypeScript Markdown parser built from the ground up with type safety and extensibility in mind. It features a complete lexer-parser-renderer architecture with an AST-based visitor pattern.

## Features (Planned)

- ✨ **Fully Type-Safe** - Complete TypeScript type coverage
- 🚀 **High Performance** - Built-in caching and optimizations
- 🎯 **AST-Based** - Complete Abstract Syntax Tree generation
- 🔧 **Extensible** - Custom visitors and renderers
- 📦 **Zero Dependencies** - Pure TypeScript implementation
- 🎨 **GFM Support** - GitHub Flavored Markdown extensions
- 📝 **Complete Documentation** - TSDoc comments everywhere

## Current Status

### ✅ Implemented
- Core type definitions
  - Token and TokenType interfaces
  - ASTNode and ASTVisitor interfaces
  - Configuration options (TypeDownOptions)
  - Position tracking types
  - ParseResult interface
- Project infrastructure
  - TypeScript configuration
  - Build tooling with tsup
  - pnpm workspace setup

### 🚧 In Progress
- Lexer (tokenization)
- Parser (AST generation)
- HTML Renderer
- Mixin system (position tracking, error collection, caching)
- AST visitor pattern implementation

### 📋 Planned
- Complete Markdown syntax support
- GitHub Flavored Markdown (GFM)
- Custom renderer support
- Comprehensive test suite
- Usage documentation and examples

## Installation

```bash
# With PNPM
pnpm add tsmark

# With NPM
npm install tsmark

# With Bun
bun add tsmark
```

## Development

```bash
# Install dependencies
pnpm install

# Build the project
pnpm run build

# Watch mode for development
pnpm run dev

# Run tests (when available)
pnpm test

# Lint code
pnpm run lint

# Format code
pnpm run format
```

## Type System

TSMark provides comprehensive TypeScript types for all components:

```typescript
// Token types for lexer output
type TokenType = 'heading' | 'paragraph' | 'bold' | 'italic' | ...;
interface Token { type: TokenType; value: string; line: number; column: number; }

// AST types for parser output
interface ASTNode { type: TokenType; children?: ASTNode[]; content?: string; }

// Configuration options
interface TypeDownOptions { gfm?: boolean; breaks?: boolean; smartypants?: boolean; }

// Parse results
interface ParseResult { ast: ASTNode; warnings: string[]; meta: { ... }; }
```

## Roadmap

- [x] Project setup and infrastructure
- [x] Core type definitions
- [ ] Mixin system implementation
- [ ] Lexer implementation
- [ ] Parser implementation
- [ ] HTML renderer
- [ ] AST visitor pattern
- [ ] Test suite
- [ ] Documentation

## Contributing

Contributions are welcome! This project is in early development, so feel free to open issues or submit pull requests.

## License

MIT © [NotKeira](https://github.com/NotKeira)

## Acknowledgments

Built with TypeScript and modern development practices. Inspired by the need for a fully type-safe Markdown parser with an extensible architecture.

---

**Status:** Pre-alpha (v1.0.0 unreleased)  
**Last Updated:** 2025-01-10
