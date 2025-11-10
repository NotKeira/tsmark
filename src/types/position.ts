/**
 * TsMark - Position Tracking Types
 * @module types/position
 * @author NotKeira
 * @version 1.0.0
 */

/**
 * Position information for tracking location in source
 */
export interface Position {
    /** Current line number (1-indexed) */
    line: number;
    /** Current column number (1-indexed) */
    column: number;
    /** Current absolute position in source */
    index: number;
}
