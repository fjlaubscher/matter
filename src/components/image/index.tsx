import React from 'react';
import classnames from 'classnames';

import styles from './image.module.scss';

export type Props = { caption?: string } & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = ({ className, caption, loading = 'lazy', ...rest }: Props) => (
  <figure className={classnames(styles.image, className)}>
    <img {...rest} loading={loading} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default Image;
