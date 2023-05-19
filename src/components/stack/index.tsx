import React from 'react';
import classnames from 'classnames';

import styles from './stack.module.scss';

export type Props = {
  direction?: 'column' | 'row';
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Stack = ({ className, children, direction = 'column', ...rest }: Props) => (
  <div className={classnames(styles.stack, styles[direction], className)} {...rest}>
    {children}
  </div>
);

export default Stack;
