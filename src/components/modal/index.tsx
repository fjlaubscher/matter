import React from 'react';
import classnames from 'classnames';

import styles from './modal.module.scss';

export interface Props {
  children: React.ReactNode;
  visible: boolean;
}

const Modal = ({ children, visible }: Props) => (
  <div className={classnames(styles.modal, visible && styles.visible)}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Modal;
