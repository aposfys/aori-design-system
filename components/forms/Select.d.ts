import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

/** A select on form stock, with the system's own chevron in place of the native arrow. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Plain strings, or { value, label } pairs. */
  options?: Array<string | SelectOption>;
  hint?: string;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
