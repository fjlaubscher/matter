import React from 'react';

// components
import Container from '../Container';
import Loader from '../Loader';

import styles from './Layout.module.scss';

export interface Props {
  children: React.ReactNode;
  title: string;
  home: React.ReactNode;
  action?: React.ReactNode;
  menu?: React.ReactNode;
  isLoading?: boolean;
}

const Layout = ({ children, title, action, home, menu, isLoading }: Props) => {
  return (
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
        {menu && <div className={styles.menu}>{menu}</div>}
      </div>
    </div>
  );
};

export default Layout;
