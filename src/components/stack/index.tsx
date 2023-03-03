import React from 'react';
import classnames from 'classnames';

import styles from './stack.module.scss';

export interface Props {
  className?: string;
  children: React.ReactNode;
  direction: 'row' | 'column';
}

const Stack = ({ className, children, direction }: Props) => (
  <div className={classnames(styles.stack, styles[direction], className)}>{children}</div>
);

export default Stack;
