import * as React from 'react';

/** A sheet of paper laid over the page — sizing guide, care instructions, a confirmation. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  /** Uppercase annotation beneath the title. */
  subtitle?: string;
  onClose?: () => void;
  /** Custom action row. Pass `null` to remove the row entirely. */
  footer?: React.ReactNode | null;
  /** Max width in px. Default 520. */
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
