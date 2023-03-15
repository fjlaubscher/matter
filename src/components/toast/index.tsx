import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';

// helpers
import { getMessageFromVariant } from '../../helpers/messages';

import styles from './toast.module.scss';

export const TOAST_VISIBLE_TIME = 2000;

const Toast = ({ text, variant }: matter.Toast) => {
  const [visible, setVisible] = useState(false);
  const toastPortal = document.getElementById('toast') as HTMLElement;
  const title = getMessageFromVariant(variant);

  useEffect(() => {
    const displayTimer = setTimeout(() => {
      setVisible(true);
    }, 0);

    const hideTimer = setTimeout(() => setVisible(false), TOAST_VISIBLE_TIME);

    return () => {
      clearTimeout(displayTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return createPortal(
    <div className={classnames(styles.toast, visible && styles.visible, styles[variant])}>
      <div className={styles.heading}>{title}</div>
      {text}
    </div>,
    toastPortal
  );
};

export default Toast;
