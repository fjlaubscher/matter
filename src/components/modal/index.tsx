import React from 'react';
import classnames from 'classnames';

import styles from './modal.module.scss';

export interface Props {
  children: React.ReactNode;
  visible: boolean;
}

const Modal: React.FC<Props> = ({ children, visible }) => (
  <div className={classnames(styles.modal, visible && styles.visible)}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Modal;
