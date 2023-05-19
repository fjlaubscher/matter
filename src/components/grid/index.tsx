import React from 'react';
import classNames from 'classnames';

import styles from './grid.module.scss';

export type Props = {
  simple?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Grid = ({ className, children, simple }: Props) => (
  <div className={classNames(styles.grid, simple ? styles.simple : undefined, className)}>
    {children}
  </div>
);

export default Grid;
