import React from 'react';
import classnames from 'classnames';

import styles from './container.module.scss';

export interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: Props) => (
  <div className={classnames(styles.container, className)}>{children}</div>
);

export default Container;
