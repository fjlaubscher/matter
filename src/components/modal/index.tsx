import React, { useEffect } from 'react';
import classnames from 'classnames';

import styles from './modal.module.scss';

export interface Props {
  children: React.ReactNode;
  className?: string;
  visible: boolean;
  onClose?: () => void;
  onOverlayClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Modal = ({ children, className, visible, onClose, onOverlayClick }: Props) => {
  useEffect(() => {
    if (onClose) {
      const listener = (key: KeyboardEvent) => {
        if (key.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keyup', listener);

      return () => {
        document.removeEventListener('keyup', listener);
      };
    }
  }, []);

  return (
    <div className={classnames(styles.modal, visible && styles.visible)} onClick={onOverlayClick}>
      <div className={classnames(styles.content, className)}>{children}</div>
    </div>
  );
};

export default Modal;
