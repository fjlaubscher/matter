import React from 'react';
import classNames from 'classnames';

import styles from './grid.module.scss';

export interface Props {
  className?: string;
  children?: React.ReactNode;
  simple?: boolean;
}

const Grid: React.FC<Props> = ({ className, children, simple }) => (
  <div className={classNames(styles.grid, simple ? styles.simple : undefined, className)}>
    {children}
  </div>
);

export default Grid;
