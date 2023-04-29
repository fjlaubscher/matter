import React from 'react';
import classnames from 'classnames';

import styles from './card.module.scss';

export type Props = {
  title?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Card = ({ id, className, children, title, onClick, ...rest }: Props) => (
  <div {...rest} id={id} className={classnames(styles.card, className)} onClick={onClick}>
    {title ? <p className={styles.title}>{title}</p> : undefined}
    {children}
  </div>
);

export default Card;
