import React from 'react';
import classnames from 'classnames';

import styles from './image.module.scss';

export type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = ({ className, ...rest }: Props) => (
  <div className={classnames(styles.image, className)}>
    <img {...rest} />
  </div>
);

export default Image;
