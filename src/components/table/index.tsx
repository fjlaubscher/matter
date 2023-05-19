import React from 'react';
import classnames from 'classnames';

import styles from './table.module.scss';

export type Props = {
  headings: { text: string; className?: string }[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement>;

const Table = ({ className, children, headings, ...rest }: Props) => (
  <div className={styles.container}>
    <table className={classnames(styles.table, className)} {...rest}>
      {headings.length > 0 ? (
        <thead>
          <tr>
            {headings.map((heading, i) => (
              <th className={heading.className} key={`table-heading-${i}`}>
                {heading.text}
              </th>
            ))}
          </tr>
        </thead>
      ) : undefined}
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default Table;
