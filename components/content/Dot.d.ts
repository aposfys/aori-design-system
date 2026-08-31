import * as React from 'react';

/** A single bead — the brand's bullet and marker, in place of an icon. */
export interface DotProps extends React.HTMLAttributes<HTMLSpanElement> {
  pigment?: string;
  size?: number;
  style?: React.CSSProperties;
}

export declare function Dot(props: DotProps): JSX.Element;
