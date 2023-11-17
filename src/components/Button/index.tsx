import React from 'react';
import classnames from 'classnames';

// components
import Loader from '../Loader';

import styles from './Button.module.scss';

export type Props = {
  loading?: boolean;
  variant?: 'primary' | matter.Variant;
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
    className={classnames(
      styles.button,
      loading ? styles.loading : undefined,
      variant ? styles[variant] : undefined,
      className
    )}
    type={type}
    onClick={onClick}
    {...rest}
  >
    {loading ? <Loader white /> : children}
  </button>
);

export default Button;
