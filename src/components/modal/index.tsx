import React, { forwardRef } from 'react';
import classnames from 'classnames';

import styles from './modal.module.scss';

export type Props = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
>;

const Modal = forwardRef<HTMLDialogElement, Props>(({ children, className, ...rest }, ref) => (
  <dialog ref={ref} className={classnames(styles.modal, className)} {...rest}>
    {children}
  </dialog>
));

export default Modal;
