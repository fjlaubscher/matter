import React from 'react';
import classNames from 'classnames';

import styles from './grid.module.scss';

export interface Props {
  className?: string;
  children?: React.ReactNode;
  simple?: boolean;
}

const Grid = ({ className, children, simple }: Props) => (
  <div className={classNames(styles.grid, simple ? styles.simple : undefined, className)}>
    {children}
  </div>
);

export default Grid;
