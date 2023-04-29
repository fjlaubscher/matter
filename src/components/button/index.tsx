import React from 'react';
import classnames from 'classnames';

// components
import Loader from '../loader';

import styles from './button.module.scss';

export type Props = {
  loading?: boolean;
  primary?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: matter.Variant;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  children,
  className,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  leftIcon,
  rightIcon,
  variant,
  ...rest
}: Props) => (
  <button
    {...rest}
    disabled={disabled}
    className={classnames(
      styles.button,
      loading && styles.loading,
      variant ? styles[variant] : undefined,
      className
    )}
    type={type}
    onClick={onClick}
  >
    {loading ? (
      <Loader white />
    ) : (
      <>
        <div>{leftIcon}</div>
        <div>{children}</div>
        <div>{rightIcon}</div>
      </>
    )}
  </button>
);

export default Button;
