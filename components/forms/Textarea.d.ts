import * as React from 'react';

/** A multi-line field on the same hairline form stock as Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  /** Quiet body-serif note under the field. Hidden while an error shows. */
  hint?: string;
  /** Turns the border rust and replaces the hint; wired to the field with aria-invalid/aria-describedby. */
  error?: string;
  rows?: number;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
