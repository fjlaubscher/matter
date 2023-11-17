import React, { forwardRef } from 'react';

// components
import Field from '../Field';

import styles from './TextAreaField.module.scss';

export type Props = {
  label?: string;
  isFullHeight?: boolean;
  errorMessage?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, name, isFullHeight, required, errorMessage, ...rest },
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => (
    <Field className={isFullHeight ? styles.fullHeight : undefined} error={errorMessage}>
      <label htmlFor={name}>{`${label} ${!required ? '(optional)' : ''}`}</label>
      <textarea id={name} name={name} ref={ref} {...rest} />
    </Field>
  )
);

export default TextAreaField;
