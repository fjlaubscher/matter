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
  variant?: Variant;
  form?: string;
}

const IconButton: React.FC<Props> = ({
  children,
  className,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  variant,
  form
}) =>
  loading ? (
    <Loader white />
  ) : (
    <button
      disabled={disabled}
      className={classnames(
        styles.iconButton,
        loading && styles.loading,
        variant ? styles[variant] : undefined,
        className
      )}
      type={type}
      onClick={onClick}
      form={form}
    >
      {children}
    </button>
  );

export default IconButton;
