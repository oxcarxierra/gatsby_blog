import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  disableScroll?: boolean,
  children: React.Node,
};

const Page = ({ title, disableScroll, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    if (!disableScroll) pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        {title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
