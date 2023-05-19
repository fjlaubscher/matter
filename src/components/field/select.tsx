import React from 'react';

// components
import Field from '.';

export type Props = {
  options: matter.Option[];
  label?: string;
  errorMessage?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

const SelectField = ({ label, name, options, required, ...rest }: Props) => (
  <Field>
    {label && <label htmlFor={name}>{`${label} ${!required ? '(optional)' : ''}`}</label>}
    <select id={name} name={name} {...rest} required={required}>
      <option>Select an option</option>
      {options.map((o, i) => (
        <option key={`option-${i}`} value={`${o.value}`}>
          {o.description}
        </option>
      ))}
    </select>
  </Field>
);

export default SelectField;
