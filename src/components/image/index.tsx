import React from 'react';
import classnames from 'classnames';

import styles from './image.module.scss';

export interface Props {
  className?: string;
  alt: string;
  src: string;
}

const Image = ({ className, alt, src }: Props) => (
  <div className={classnames(styles.image, className)}>
    <img src={src} alt={alt} />
  </div>
);

export default Image;
