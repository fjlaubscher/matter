import React from 'react';
import classnames from 'classnames';

import styles from './Field.module.scss';

export type Props = {
  error?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Field = ({ className, children, error, ...rest }: Props) => (
  <div className={classnames(styles.field, className)} {...rest}>
    {children}
    {error && <span className={styles.error}>{error}</span>}
  </div>
);

export default Field;
