import React from 'react';
import classnames from 'classnames';

import styles from './Form.module.scss';

export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Form = ({ children, className, ...rest }: Props) => (
  <form className={classnames(styles.form, className)} {...rest}>
    {children}
  </form>
);

export default Form;
