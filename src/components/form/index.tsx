import React from 'react';
import classnames from 'classnames';

import styles from './form.module.scss';

export interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  testId?: string;
}

const Form = ({ children, className, id, onSubmit, testId }: Props) => (
  <form
    id={id}
    className={classnames(styles.form, className)}
    onSubmit={onSubmit}
    data-testid={testId}
  >
    {children}
  </form>
);

export default Form;
