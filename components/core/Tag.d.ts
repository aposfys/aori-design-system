import * as React from 'react';

/** A stamped label for material, run size or collection. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** outline = hairline carbon box · solid = flat pigment field · ledger = stone stock, body serif, sentence case */
  variant?: 'outline' | 'solid' | 'ledger';
  size?: 'sm' | 'md';
  /** Fill colour for the solid variant. Defaults to fresco pink. */
  pigment?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
