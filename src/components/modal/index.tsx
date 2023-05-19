import React, { useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { useOnClickOutside, useLockedBody } from 'usehooks-ts';

import styles from './modal.module.scss';

export type Props = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>;

const Modal = ({ children, className, open, onClose, ...rest }: Props) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDialogElement>(null);

  const handleOnClose = useCallback(
    (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
      if (ref.current && onClose && open) {
        ref.current.close();
        onClose(e);
      }
    },
    [ref, open, onClose]
  );

  useLockedBody(open);
  useOnClickOutside(backdropRef, (e) =>
    handleOnClose(e as unknown as React.SyntheticEvent<HTMLDialogElement, Event>)
  );

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [ref, open]);

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
