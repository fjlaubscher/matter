import React from 'react';
import classnames from 'classnames';

import styles from './card.module.scss';

export interface Props {
  className?: string;
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ className, children, title, onClick }) => (
  <div className={classnames(styles.card, className)} onClick={onClick}>
    {title ? <p className={styles.title}>{title}</p> : undefined}
    {children}
  </div>
);

export default Card;
