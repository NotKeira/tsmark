/**
 * TsMark - Token Type Definitions
 * @module types/tokens
 * @author NotKeira
 * @version 1.0.0
 */

/**
 * Represents the type of a markdown token
 */
export type TokenType =
    | 'heading'
    | 'paragraph'
    | 'bold'
    | 'italic'
    | 'strikethrough'
    | 'code'
    | 'code_block'
    | 'link'
    | 'image'
    | 'blockquote'
    | 'list_ordered'
    | 'list_unordered'
    | 'list_item'
    | 'horizontal_rule'
    | 'line_break'
    | 'text'
    | 'eof';

/**
 * Represents a single token produced by thr lexer
 */
export interface Token {
    /** The type of token */
    readonly type: TokenType;
    /** The raw value/content of the token */
    readonly value: string;
    /** The line number where this token appears */
    readonly line: number;
    /** The column number where this token starts */
    readonly column: number;
    /** Optional metadata for the token */
    readonly meta?: Record<string, unknown>;
}