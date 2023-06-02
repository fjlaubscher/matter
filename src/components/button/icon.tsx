import React from 'react';
import classnames from 'classnames';

// components
import Loader from '../loader';

import styles from './button.module.scss';

export type Props = {
  loading?: boolean;
  variant?: 'primary' | matter.Variant;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const IconButton = ({
  children,
  className,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  variant,
  form,
  ...rest
}: Props) =>
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
      {...rest}
    >
      {children}
    </button>
  );

export default IconButton;
