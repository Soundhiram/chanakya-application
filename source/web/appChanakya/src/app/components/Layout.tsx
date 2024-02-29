import React from 'react';
import { Col, Layout, Row } from 'antd';
import { LandingPage } from '../landingPage';
import './AppLayout.css'; // Import the CSS file
const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="fixed-header">
        <div>
          <Row>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <div>

            LOGO
            </div>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            
            </Col>
          </Row>
        </div>
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
