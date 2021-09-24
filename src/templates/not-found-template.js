// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>404 존재하지 않는 페이지입니다.</p>
        <p>이곳을 찾아낸 당신은... 혹시 개발자?</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
