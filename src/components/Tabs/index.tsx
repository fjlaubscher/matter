import React, { useMemo } from 'react';
import classnames from 'classnames';

// components
import Container from '../Container';

import styles from './Tabs.module.scss';

export interface Props {
  children: React.ReactNode;
  className?: string;
  tabs: string[];
  active: number;
  onChange: (index: number) => void;
}

const Tabs = ({ children, className, tabs, active, onChange }: Props) => {
  const filteredTabs = useMemo(() => tabs.filter(Boolean), [tabs]);
  const filteredContent = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children]
  );

  return (
    <>
      <Container className={classnames(styles.container, className)}>
        <div className={styles.tabs}>
          {filteredTabs.map((t, i) => (
            <button
              key={`tab-${i}`}
              className={classnames(styles.tab, i === active && styles.active)}
              onClick={() => onChange(i)}
            >
              {t}
            </button>
          ))}
        </div>
      </Container>
      {filteredContent[active]}
    </>
  );
};

export default Tabs;
