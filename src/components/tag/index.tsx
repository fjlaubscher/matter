import React from 'react';
import classnames from 'classnames';

import styles from './tag.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}

const Tag: React.FC<Props> = ({ children, className, variant }) => (
  <span className={classnames(styles.tag, variant ? styles[variant] : undefined, className)}>
    {children}
  </span>
);

export default Tag;
