import React from 'react';
import classnames from 'classnames';

// components
import Container from '../container';
import Loader from '../loader';

import styles from './layout.module.scss';

export interface Props {
  children: React.ReactNode;
  title: string;
  home: React.ReactNode;
  action?: React.ReactNode;
  menu?: React.ReactNode;
  isLoading?: boolean;
}

const Layout: React.FC<Props> = ({ children, title, action, home, menu, isLoading }) => (
  <div className={styles.container}>
    <div className={styles.navbar}>
      <nav>
        <div className={styles.home}>{home}</div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.action}>{action}</div>
      </nav>
    </div>
    <div className={styles.content}>
      <Container className={styles.children}>{isLoading ? <Loader /> : children}</Container>
      {menu && <div className={classnames(styles.actionBar, styles.visible)}>{menu}</div>}
    </div>
  </div>
);

export default Layout;
