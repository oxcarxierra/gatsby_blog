import React, { useRef, useEffect } from 'react';

const Main = () => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });
  return (
    <div ref={pageRef}>
      <h3 className={1}>안녕하세요, 꿈꾸는 공대생 오승석입니다.</h3>
      <h5>좋아하는 것을 찾고, 그것에 도전하는 삶의 방식을 즐깁니다.</h5>
    </div>
  );
};

export default Main;
