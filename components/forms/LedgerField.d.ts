import * as React from 'react';

/**
 * A hairline cell on stone stock for sizing, weights and order data — the administrative register.
 * @startingPoint section="Forms" subtitle="Ledger cells for sizes, weights and order data" viewport="700x150"
 */
export interface LedgerFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Printed-form label. Italic body serif unless emphasis is set. */
  label?: React.ReactNode;
  /** The value. Children take precedence if both are given. */
  value?: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  /** Sets the label uppercase and bold instead of italic — for a column header. */
  emphasis?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function LedgerField(props: LedgerFieldProps): JSX.Element;
