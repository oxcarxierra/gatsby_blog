// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import Main from '../components/Main/Main';

const MainTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Main - ${title}`} description={subtitle}>
      <Sidebar />
      <Page disableScroll={true}>
        <Main />
      </Page>
    </Layout>
  );
};

export default MainTemplate;
