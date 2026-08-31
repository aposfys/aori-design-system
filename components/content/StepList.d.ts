import * as React from 'react';

export interface StepListItem {
  label: string;
  /** Optional second line in the body serif. */
  note?: string;
  /** Override the bead colour for this step. */
  pigment?: string;
}

/** An ordered list marked with beads, or with two-digit ledger numbers. */
export interface StepListProps extends React.HTMLAttributes<HTMLOListElement> {
  items?: Array<string | StepListItem>;
  marker?: 'dot' | 'number';
  style?: React.CSSProperties;
}

export declare function StepList(props: StepListProps): JSX.Element;
