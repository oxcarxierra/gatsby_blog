import React from 'react';
import styles from './main.module.scss';

const Main = () => (
  <div className={styles.main}>
    <img src={'/media/mainBanner.jpg'} className={styles.main__image} />
    <div className={styles.main__text}>
      <h3 className={styles.main__title}>안녕하세요 오승석입니다! 👋</h3>
      <div className={styles.main__body}>
        기록의 중요성을 믿고 이곳에서 실천하고자 합니다.
      </div>
    </div>
  </div>
);

export default Main;
