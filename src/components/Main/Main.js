import React from 'react';
import styles from './main.module.scss';

const Main = () => (
  <div className={styles.main}>
    <img src={'/media/mainBanner.jpg'} className={styles.main__image} />
    <div className={styles.main__text}>
      <h3 className={styles.main__title}>안녕하세요 👋 </h3>
      <h4 className={styles.main__body}>꿈꾸는 공대생 오승석입니다.</h4>
      <h4 className={styles.main__body}>
        좋아하는 것을 찾아가고, 도전해 나가는 삶을 즐깁니다.
      </h4>
      <h3 className={styles.main__title}>Contacts</h3>
      <h4 className={styles.main__body}>
        010-7164-3848 | littlestein@snu.ac.kr
      </h4>
    </div>
  </div>
);

export default Main;
