import React from 'react';
import clsx from 'clsx';
import { LoaderCircle } from 'lucide-react';
import { TSizes } from '../types/sizes.d';

export interface Props {
  size?: TSizes;
}

export function Loading({ size = 'md' }: Props) {
  return (
    <LoaderCircle
      className="animate-spin text-[color:var(--light-color-text-primary)] dark:text-[color:var(--dark-color-text-secondary)]"
      size={clsx({
        24: size === 'sm',
        32: size === 'md',
        48: size === 'lg',
        80: size === 'xl',
      })}
    />
  );
}
