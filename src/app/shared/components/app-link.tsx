import Link from 'next/link';
import { ReactNode } from 'react';
import css from './app-link.module.css';
import { UrlObject } from 'url';

export function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) {
  return (
    <Link className={css.root} href={href}>
      {children}
    </Link>
  );
}
