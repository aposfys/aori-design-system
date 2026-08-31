import * as React from 'react';

/** A horizontal rule at one of the system's three line weights. */
export interface RuleProps extends React.HTMLAttributes<HTMLHRElement> {
  /** hair = 1px stone · ink = 2px carbon · brush = 3px carbon */
  weight?: 'hair' | 'ink' | 'brush';
  /** Overrides the weight's default colour with any token. */
  color?: string;
  /** Vertical margin above and below. */
  spacing?: string;
  style?: React.CSSProperties;
}

export declare function Rule(props: RuleProps): JSX.Element;
