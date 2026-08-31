import * as React from 'react';

export interface NavItem { id?: string; label: string; href?: string }

/** The site header — the only fixed element in the system. */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
  /** id (or label) of the current item. */
  active?: string;
  onSelect?: (id: string) => void;
  /** Right-hand slot — basket count, search, a quiet Button. */
  right?: React.ReactNode;
  /** paper = lime page · ground = burnt olive wood, for the image-led direction */
  ground?: 'paper' | 'ground';
  /** Wordmark text, type-set. A nav bar sits below the painted mark's 28px floor. */
  name?: string;
  /** Optional image path to override the type-set mark — only if the header is 28px or taller. */
  markSrc?: string;
  markHref?: string;
  sticky?: boolean;
  style?: React.CSSProperties;
}

export declare function NavBar(props: NavBarProps): JSX.Element;
