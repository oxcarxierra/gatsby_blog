// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const MainTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`MainPage - ${title}`} description={subtitle}>
      <Sidebar />
      <Page />
    </Layout>
  );
};

export default MainTemplate;
