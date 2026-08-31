import * as React from 'react';

export interface TabItem { id?: string; label: string; count?: number }

/** A row of stamps on an unbroken hairline — product detail sections, collection filters. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: TabItem[];
  /** id (or label) of the selected tab. */
  value?: string;
  onChange?: (id: string) => void;
  size?: 'sm' | 'md';
  /** Fill for the selected tab. Defaults to terracotta. */
  pigment?: string;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
