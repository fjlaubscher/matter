import React from 'react';
import classnames from 'classnames';

// components
import Loader from '../loader';

import styles from './button.module.scss';

export type Props = {
  loading?: boolean;
  variant?: matter.Variant;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  children,
  className,
  loading = false,
  type = 'button',
  onClick,
  variant,
  ...rest
}: Props) => (
  <button
    {...rest}
    className={classnames(
      styles.button,
      loading ? styles.loading : undefined,
      variant ? styles[variant] : undefined,
      className
    )}
    type={type}
    onClick={onClick}
  >
    {loading ? <Loader white /> : children}
  </button>
);

export default Button;
