export interface HeaderLink {
  href: string;
  label: string;
  match?: string;
}

export interface HeaderProps {
  links: HeaderLink[];
}
