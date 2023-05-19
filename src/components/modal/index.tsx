import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useOnClickOutside, useLockedBody } from 'usehooks-ts';

import styles from './modal.module.scss';

export type Props = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>;

const Modal = ({ children, className, open, ...rest }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const [showModal, setShowModal] = useState(open);

  useLockedBody(open);
  useOnClickOutside(ref, () => setShowModal(false));

  useEffect(() => {
    if (ref.current) {
      if (showModal) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    }
  }, [ref, showModal]);

  return (
    <dialog
      {...rest}
      onClose={() => setShowModal(false)}
      ref={ref}
      className={classnames(styles.modal, className)}
    >
      {children}
    </dialog>
  );
};

export default Modal;
