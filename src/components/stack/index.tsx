import React from 'react';
import classnames from 'classnames';

import styles from './stack.module.scss';

export interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
  direction: 'row' | 'column';
}

const Stack = ({ id, className, children, direction }: Props) => (
  <div id={id} className={classnames(styles.stack, styles[direction], className)}>
    {children}
  </div>
);

export default Stack;
