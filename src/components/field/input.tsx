import React, { forwardRef } from 'react';

// components
import Field from '.';

export type Props = {
  label?: string;
  errorMessage?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, required, errorMessage, ...rest }, ref) => (
    <Field error={errorMessage}>
      {label && <label htmlFor={name}>{`${label} ${!required ? '(optional)' : ''}`}</label>}
      <input ref={ref} id={name} name={name} required={required} {...rest} />
    </Field>
  )
);

export default InputField;
