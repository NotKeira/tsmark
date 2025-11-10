/**
 * TsMark - Configuration Options
 * @module types/options
 * @author NotKeira
 * @version 1.0.0
 */

/**
 * Configuration options for the TsMark parser
 */
export interface TsMarkOptions {
    /** Enable GitHub Flavored Markdown extensions */
    readonly gfm?: boolean;
    /** Enable line breaks without double spaces */
    readonly breaks?: boolean;
    /** Enable smart quotes and other smart punctuation */
    readonly smartypants?: boolean;
}