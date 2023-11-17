import React from 'react';
import classnames from 'classnames';

import styles from './Stat.module.scss';

export type Props = {
  description?: string;
  title: string;
  value: string | number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Stat = ({ className, description, title, value, ...rest }: Props) => (
  <div className={classnames(styles.stat, className)} {...rest}>
    <span className={styles.title}>{title}</span>
    <span className={styles.value}>{value}</span>
    {description && <span className={styles.description}>{description}</span>}
  </div>
);

export default Stat;
