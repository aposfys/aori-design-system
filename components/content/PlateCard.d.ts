import * as React from 'react';

/**
 * A plate with a caption and a line of metadata — the card used in every collection grid.
 * @startingPoint section="Content" subtitle="Product card for a collection grid" viewport="700x300"
 */
export interface PlateCardProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  /** Pigment field to use when there is no image. */
  field?: string;
  ratio?: 'portrait' | 'landscape' | 'square' | 'tall' | 'wide' | string;
  /** Caption line — uppercase annotation voice. */
  title?: React.ReactNode;
  /** Second line: material, price, run size. */
  meta?: React.ReactNode;
  /** Renders as an anchor when set. */
  href?: string;
  width?: string | number;
  tilt?: number;
  /** Dim to 55%. Set on the SIBLINGS of a hovered card, never on the target. */
  dim?: boolean;
  style?: React.CSSProperties;
}

export declare function PlateCard(props: PlateCardProps): JSX.Element;
