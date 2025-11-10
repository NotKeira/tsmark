# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup with pnpm workspace configuration
- Package.json with project metadata and build scripts
    - Configured for dual CJS/ESM output
    - Build, dev, test, lint, and format scripts
    - Keywords for npm discoverability
    - Package manager specification (pnpm@10.21.0)
- CHANGELOG.md following Keep a Changelog v1.1.0 format
- MIT License for open source distribution
- TypeScript configuration with strict type checking
    - ES2020 target with ESNext modules
    - Declaration and source map generation
    - Strict compiler options enabled
    - Output directory structure (src/ -> dist/)
- IntelliJ IDEA project configuration
    - JavaScript library mappings
    - VCS integration
    - Project modules setup
- Core type definitions
    - Token and TokenType for lexer output
    - ASTNode and ASTVisitor for parser and traversal
    - TSMarkOptions for parser configuration
    - Position interface for source location tracking
    - ParseResult interface for parse operation output
    - Organized into logical modules with barrel export
- README.md with project overview and current status
    - Work-in-progress disclaimer
    - Feature roadmap
    - Type system documentation
    - Development setup instructions
    - Project structure overview

### Changed
- Updated prepublishOnly script to use pnpm instead of npm
- Configured pnpm@10.21.0 with integrity hash for Corepack
- Rebranded package from typemark to typedown to avoid naming conflicts
- Rebranded package from typedown to tsmark to avoid naming conflicts

[Unreleased]: https://github.com/NotKeira/tsmark/compare/v0.1.0...HEAD