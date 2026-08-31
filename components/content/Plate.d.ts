import * as React from 'react';

/**
 * A painted rectangle inside an unpainted paper margin — the unit every image passes through.
 * @startingPoint section="Content" subtitle="Painted plates in every proportion" viewport="700x210"
 */
export interface PlateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. Omit to render a flat field of pigment instead. */
  src?: string;
  alt?: string;
  /** Pigment token used when there is no src. */
  field?: string;
  ratio?: 'portrait' | 'landscape' | 'square' | 'tall' | 'wide' | string;
  /** Width of the unpainted paper margin. Defaults to 6px. */
  margin?: string;
  width?: string | number;
  /** Degrees of rotation. Use sparingly — one broken alignment per page. */
  tilt?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Plate(props: PlateProps): JSX.Element;
