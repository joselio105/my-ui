import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Loading } from './Loading';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSecondary?: boolean;
  to?: string;
  isLoading?: boolean;
}

export function Button({
  to,
  isSecondary = false,
  isLoading = false,
  ...props
}: Props) {
  const buttonStyle = clsx(
    'min-w-16 p-3 rounded-lg duration-300 border flex items-center justify-center gap-3 flex-1',
    {
      'bg-[color:var(--light-color-bg-primary)] text-[color:var(--light-color-text-primary)]': !isSecondary,
      'border-secondary-700 hover:bg-[color:var(--light-color-bg-secondary)]': !isSecondary,
      'dark:bg-[color:var(--dark-color-bg-primary)] dark:text-[color:var(--dark-color-text-primary)]': !isSecondary,
      'border-[color:var(--light-color-text-secondary)] text-[color:var(--light-color-text-secondary)]': isSecondary,
      'hover:text-[color:var(--light-color-bg-secondary)] hover:border-[color:var(--light-color-bg-secondary)]': isSecondary,
      'dark:border-[color:var(--dark-color-text-secondary)] dark:text-[color:var(--dark-color-text-secondary)]': isSecondary,
    },
    props.className
  );
  if (to) {
    return (
      <Link to={to} className={buttonStyle}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={buttonStyle} {...props}>
        {isLoading ? <Loading size="sm" /> : props.children}
      </button>
    );
  }
}
