import React from 'react';
import classnames from 'classnames';

import styles from './tag.module.scss';

export interface Props {
  children: React.ReactNode;
  className?: string;
}

const TagGroup: React.FC<Props> = ({ children, className }) => (
  <div className={classnames(styles.tagGroup, className)}>{children}</div>
);

export default TagGroup;
