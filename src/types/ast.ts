/**
 * TsMark - Abstract Syntax Tree Type Definitions
 * @module types/ast
 * @author NotKeira
 * @version 1.0.0
 */

import type {TokenType} from './tokens';

/**
 * Represents a node in the Abstract Syntax Tree
 */
export interface ASTNode {
    /** The type of AST node */
    readonly type: TokenType;
    /** Child nodes */
    readonly children?: readonly ASTNode[];
    /** Text content of the node */
    readonly content?: string;
    /** Optional metadata */
    readonly meta?: Record<string, unknown>;
}

/**
 * Visitor interface for traversing AST
 */
export interface ASTVisitor<TResult = ASTNode> {
    /**
     * Visit a node in the AST
     * @param node - Node to visit
     * @param context - Optional context data
     * @returns Transformed node or void
     */
    visit(node: ASTNode, context?: unknown): TResult | void;
}