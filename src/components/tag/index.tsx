import React from 'react';
import classnames from 'classnames';

import styles from './tag.module.scss';

export type Props = {
  variant?: matter.Variant;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Tag = ({ children, className, variant, ...rest }: Props) => (
  <span
    className={classnames(styles.tag, variant ? styles[variant] : undefined, className)}
    {...rest}
  >
    {children}
  </span>
);

export default Tag;
