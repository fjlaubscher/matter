import React from 'react';
import classnames from 'classnames';

// helpers
import { getMessageFromVariant } from '../../helpers/messages';

import styles from './alert.module.scss';

export interface Props {
  className?: string;
  children: React.ReactNode;
  variant: Variant;
  title?: string;
}

const Alert: React.FC<Props> = ({ children, variant, title, className }) => (
  <article className={classnames(styles.alert, styles[variant], className)}>
    {<span className={styles.title}>{title || getMessageFromVariant(variant)}</span>}
    {children}
  </article>
);

export default Alert;
