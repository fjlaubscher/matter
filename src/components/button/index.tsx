import React from 'react';
import classnames from 'classnames';

// components
import Loader from '../loader';

import styles from './button.module.scss';

export interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: Variant;
}

const Button: React.FC<Props> = ({
  children,
  className,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  leftIcon,
  rightIcon,
  variant
}) => (
  <button
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
