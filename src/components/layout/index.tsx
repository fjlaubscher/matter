import React, { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts';

// components
import Container from '../container';
import Loader from '../loader';
import InputField from '../field/input';

import styles from './layout.module.scss';

export interface Props {
  children: React.ReactNode;
  title: string;
  home: React.ReactNode;
  action?: React.ReactNode;
  menu?: React.ReactNode;
  isLoading?: boolean;
  onSearchChange?: (term: string) => Promise<void>;
}

const Layout = ({ children, title, action, home, menu, isLoading, onSearchChange }: Props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  useEffect(() => {
    const handleOnSearchChange = async (term: string) => {
      if (onSearchChange) {
        setIsSearching(true);
        await onSearchChange(term);
        setIsSearching(false);
      }
    };

    handleOnSearchChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <nav>
          <div className={styles.home}>{home}</div>
          {onSearchChange ? (
            <InputField
              type="search"
              placeholder="Search"
              name="search"
              onChange={handleOnChange}
            />
          ) : (
            <h1 className={styles.title}>{title}</h1>
          )}
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
