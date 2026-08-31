import * as React from 'react';

/** The five permitted UI strokes — 2px, square caps, mitred joins, currentColor. Not an icon set. */
export interface MarkProps extends React.SVGAttributes<SVGSVGElement> {
  name?: 'close' | 'plus' | 'minus' | 'arrow' | 'arrow-left' | 'chevron' | 'chevron-down';
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}

export declare function Mark(props: MarkProps): JSX.Element;
