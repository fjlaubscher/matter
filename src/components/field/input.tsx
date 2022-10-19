import React, { forwardRef } from 'react';

// components
import Field from '.';

interface Props {
  label?: string;
  type: string;
  name?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, type, placeholder, required, errorMessage, onChange }, ref) => (
    <Field error={errorMessage}>
      {label && <label htmlFor={name}>{`${label} ${!required ? '(optional)' : ''}`}</label>}
      <input
        id={name}
        onChange={onChange}
        name={name}
        type={type}
        ref={ref}
        placeholder={placeholder}
        required={required}
      />
    </Field>
  )
);

export default InputField;
