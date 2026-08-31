import * as React from 'react';

/**
 * A single-line text field: uppercase annotation label, hairline stone border, square corners.
 * @startingPoint section="Forms" subtitle="Form stock — fields, hints and errors" viewport="700x260"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Quiet body-serif note under the field. Hidden while an error shows. */
  hint?: string;
  /** Turns the border red ochre and replaces the hint. */
  error?: string;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
