import React from 'react';
import classnames from 'classnames';

import styles from './modal.module.scss';

export interface Props {
  children: React.ReactNode;
  visible: boolean;
  onOverlayClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Modal = ({ children, visible, onOverlayClick }: Props) => (
  <div className={classnames(styles.modal, visible && styles.visible)} onClick={onOverlayClick}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Modal;
