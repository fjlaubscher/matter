import React from 'react';
import classnames from 'classnames';

import styles from './Loader.module.scss';

export interface Props {
  white?: boolean;
}

const Loader = ({ white }: Props) => (
  <div className={classnames(styles.loader, white && styles.white)}>
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
