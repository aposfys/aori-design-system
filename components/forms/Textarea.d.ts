import * as React from 'react';

/** A multi-line field on the same hairline form stock as Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  rows?: number;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
