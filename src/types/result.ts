/**
 * TsMark - Parse Result Types
 * @module types/result
 * @author NotKeira
 * @version 1.0.0
 */

import type {ASTNode} from './ast';

/**
 * Result of parsing operations
 */
export interface ParseResult {
    /** The root AST node */
    readonly ast: ASTNode;
    /** Any warnings generated during parsing */
    readonly warnings: readonly string[];
    /** Parsing metadata */
    readonly meta: {
        /** Total number of tokens generated */
        readonly tokenCount: number;
        /** Time taken to parse in milliseconds */
        readonly parseTime: number;
    };
}