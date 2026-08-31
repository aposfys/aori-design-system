import * as React from 'react';

/** A stamped note that sits in the page flow — never a floating toast. */
export interface NoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** calm = aegean · warm = saffron · stop = terracotta · go = cypress · ledger = hairline grey */
  tone?: 'calm' | 'warm' | 'stop' | 'go' | 'ledger';
  /** Overrides the tone's default uppercase label. */
  label?: string;
  /** paper = lime page stock · ledger = stone form stock */
  ground?: 'paper' | 'ledger';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Notice(props: NoticeProps): JSX.Element;
