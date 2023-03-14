import React from 'react';
import classnames from 'classnames';

import styles from './card.module.scss';

export interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Card = ({ id, className, children, title, onClick }: Props) => (
  <div id={id} className={classnames(styles.card, className)} onClick={onClick}>
    {title ? <p className={styles.title}>{title}</p> : undefined}
    {children}
  </div>
);

export default Card;
