import * as React from 'react';

/**
 * A square-cornered button in the annotation voice: uppercase, tracked, no radius, no shadow.
 * @startingPoint section="Core" subtitle="Buttons in every variant and size" viewport="700x210"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = flat pigment field · secondary = 2px carbon outline · quiet = underlined link */
  variant?: 'primary' | 'secondary' | 'quiet';
  size?: 'sm' | 'md' | 'lg';
  /** Overrides the primary fill with any pigment token. Never a gradient. */
  pigment?: string;
  /** Element to render. 'a' for links. */
  as?: 'button' | 'a' | 'span';
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
