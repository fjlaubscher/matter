import React from 'react';
import classnames from 'classnames';

import styles from './container.module.scss';

export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Container = ({ className, children }: Props) => (
  <div className={classnames(styles.container, className)}>{children}</div>
);

export default Container;
