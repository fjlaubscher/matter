import React, { useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { useOnClickOutside, useScrollLock } from 'usehooks-ts';

import styles from './Modal.module.scss';

export type Props = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>;

const Modal = ({ children, className, open, onClose, ...rest }: Props) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDialogElement>(null);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  })

  const handleOnClose = useCallback(
    (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
      if (ref.current && onClose && open) {
        ref.current.close();
        onClose(e);
      }
    },
    [ref, open, onClose]
  );

  useOnClickOutside(backdropRef, (e) =>
    handleOnClose(e as unknown as React.SyntheticEvent<HTMLDialogElement, Event>)
  );

  const handleDisplayModal = useCallback((show: boolean | undefined) => {
    if (show) {
      lock();
      ref.current?.showModal();
    } else {
      unlock();
      ref.current?.close();
    }
  }, [ref, lock, unlock])

  useEffect(() => {
    handleDisplayModal(open);
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={classnames(styles.modal, className)}
      onClose={(e) => handleOnClose(e)}
      {...rest}
    >
      <div ref={backdropRef} className={styles.backdrop}>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
