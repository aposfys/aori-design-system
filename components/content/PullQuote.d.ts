import * as React from 'react';

/** A short line set in display lettering, standing alone on the page. */
export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement> {
  attribution?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PullQuote(props: PullQuoteProps): JSX.Element;
