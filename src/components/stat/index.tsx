import classnames from 'classnames';
import React from 'react';

import styles from './stat.module.scss';

interface Props {
  className?: string;
  description?: string;
  title: string;
  value: string | number;
  variant?: 'info' | 'success' | 'error' | 'warning';
}

const Stat: React.FC<Props> = ({ className, description, title, value, variant }) => (
  <div className={classnames(styles.stat, variant ? styles[variant] : undefined, className)}>
    <span className={styles.title}>{title}</span>
    <span className={styles.value}>{value}</span>
    {description && <span className={styles.description}>{description}</span>}
  </div>
);

export default Stat;
