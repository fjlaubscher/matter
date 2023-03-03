import React from 'react';
import classnames from 'classnames';

import styles from './field.module.scss';

export interface Props {
  className?: string;
  children: React.ReactNode;
  error?: string;
}

const Field = ({ className, children, error }: Props) => (
  <div className={classnames(styles.field, className)}>
    {children}
    {error && <div className={styles.error}>{error}</div>}
  </div>
);

export default Field;
