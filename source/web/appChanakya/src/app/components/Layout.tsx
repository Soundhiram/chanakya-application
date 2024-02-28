import React from 'react';
import { Layout } from 'antd';
import { LandingPage } from '../landingPage';
const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '88vh' }}>
      <Header style={{ background: '#333', color: '#fff', textAlign: 'center',height:'100px',width:'85.8rem',marginLeft:'-15px',marginTop:'-10px' }}>
      </Header>
      <Content style={{ padding: '20px', marginBottom: '0px' ,backgroundColor:'white'}}>
        <LandingPage/>
      </Content>
      <Footer style={{ background: '#333', color: '#fff', textAlign: 'center', position: 'fixed', padding:'0px',bottom: 0, left: 0, width: '100%' }}>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default AppLayout;
