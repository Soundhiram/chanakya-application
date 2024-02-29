import React from 'react';
import { Layout } from 'antd';
import { LandingPage } from '../landingPage';
import './AppLayout.css'; // Import the CSS file
const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="fixed-header">
        {/* Header content */}
      </Header>
      <Content className="content">
        <LandingPage/>
      </Content>
      <Footer className="footer">
        &copy; {new Date().getFullYear()} Young Chanakya. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default AppLayout;
