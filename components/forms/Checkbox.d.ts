import * as React from 'react';

/** A square checkbox that fills flat with pigment when checked. No tick glyph. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  checked?: boolean;
  /** Fill colour when checked. Defaults to red ochre. */
  pigment?: string;
  style?: React.CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
