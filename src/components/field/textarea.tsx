import React, { forwardRef } from 'react';

// components
import Field from '.';

import styles from './field.module.scss';

interface Props {
  label: string;
  name?: string;
  placeholder?: string;
  isFullHeight?: boolean;
  required?: boolean;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, name, placeholder, isFullHeight, required, errorMessage, onChange },
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => (
    <Field className={isFullHeight ? styles.fullHeight : undefined} error={errorMessage}>
      <label htmlFor={name}>{`${label} ${!required ? '(optional)' : ''}`}</label>
      <textarea id={name} onChange={onChange} name={name} ref={ref} placeholder={placeholder} />
    </Field>
  )
);

export default TextAreaField;
