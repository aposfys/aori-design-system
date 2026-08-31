import * as React from 'react';

/** A strung line of beads — decoration, stepper, or a selector when onSelect is passed. */
export interface DotChainProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Pigment per bead. Defaults to the brand's strung sequence. */
  colors?: string[];
  size?: number;
  /** Repeat the colour list to this length instead of using it once. */
  count?: number;
  /** Index of the selected bead; the rest fade to paper. */
  active?: number;
  gap?: number | string;
  onSelect?: (index: number) => void;
  style?: React.CSSProperties;
}

export declare function DotChain(props: DotChainProps): JSX.Element;
