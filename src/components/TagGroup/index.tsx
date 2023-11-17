import React from 'react';
import classnames from 'classnames';

import styles from './TagGroup.module.scss';

export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const TagGroup = ({ children, className }: Props) => (
  <div className={classnames(styles.tagGroup, className)}>{children}</div>
);

export default TagGroup;
