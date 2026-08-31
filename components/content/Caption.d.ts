import * as React from 'react';

/** The uppercase, tracked caption voice that sits under a plate. */
export interface CaptionProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right';
  /** paper = for captions set over a dark pigment field. */
  tone?: 'ink' | 'muted' | 'paper';
  tilt?: number;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Caption(props: CaptionProps): JSX.Element;
