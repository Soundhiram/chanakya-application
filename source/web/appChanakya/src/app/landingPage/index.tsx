import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, message } from 'antd';
import Leaders from '../form/leaders.tsx/form';
import './style.less';
import Chanakyas from '../form/chanakya/form';
import form from 'antd/es/form';
import axios from 'axios';
import { Subscriber } from '../../interface/leaderInterface';

export const LandingPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: Subscriber) => {
    try {
      const response = await axios.post(
        'http://localhost:3333/api/subscriber/create',
        values
      );
      form.resetFields();

      console.log('Leader created:', response.data);
    } catch (error) {
      console.error('Error creating leader:', error);
    }
  };

  return (
    <div className="container">
      <div className="head-div animated fadeIn">
        <h1 className="head-h1 ubuntu-bold">Launching Soon</h1>
      </div>
      <div className="head-p animated fadeInUp">
        <p className="para-head josefin-sans">
          Ignite your inner leadership with your mentors, industry experts,
          leaders, unicorn founders, and value-adding people. Young Chanakya is
          here to provide you an initial thrust. <span>🚀🚀</span>
        </p>
      </div>

      <Row gutter={[16, 16]} className="animated fadeIn">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Card>
            <h1 className="col-h1 ubuntu-bold">I am Chanakya</h1>
            <div className="des-div">
              <p className="des-para  josefin-sans ">
                Are you a leader in your field? We introduce you to the World.
              </p>
            </div>
            <Chanakyas />
          </Card>
        </Col>

        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Card>
            <h1 className="col-h1 ubuntu-bold">Become A Chanakya</h1>
            <div className="des-div ">
              <p className="des-para josefin-sans">
                You want to become a leader in your interested domain? Drop your
                details here.
              </p>
            </div>
            <Leaders />
          </Card>
        </Col>
      </Row>

      <div className="input-container">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'Please enter a valid email address!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div>
        <Card>video</Card>
      </div>
    </div>
  );
};

export default LandingPage;
