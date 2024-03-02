import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, message } from 'antd';
import Leaders from '../form/leaders.tsx/form';
import './style.less';
import Chanakyas from '../form/chanakya/form';
import form from 'antd/es/form';
import axios from 'axios';
import { Subscriber } from '../../interface/leaderInterface';
import {
  InstagramOutlined,
  PinterestOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

export const LandingPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: Subscriber) => {
    try {
      const response = await axios.post(
        'http://localhost:3333/api/subscriber/create',
        values
      );
      
      console.log('Leader created:', response.data);
      form.resetFields();
      message.success({
        content: 'You have subscribed successfully!',
        duration: 5, // Duration in seconds
        onClose: () => {
          console.log('Notification closed');
        },
      });
    } catch (error) {
      console.error('Error creating leader:', error);
    }
  };

  return (
    <div className="container">
      <section>
        <div className="head-div animated fadeIn">
          <h1 className="head-h1 cizul-bold">WE’RE COMING SOON</h1>
        </div>
        <div className="img-div">
          <img src="/assets/img/main-logo.png" alt="" />
        </div>
        <div className="head-p animated fadeInUp">
          <h1 className="head-h1 cizul-bold">YOUNG CHANAKYA</h1>
          <p className="p-head cizul">Leadership. Business. Network.</p>
        </div>
        <div className="head-p animated fadeInUp">
          <p className="para-head cizul">
            Ignite your inner leadership with your mentors, industry experts,
            leaders, unicorn founders, and value-adding people. Young Chanakya
            is here to provide you an initial thrust. <span>🚀🚀</span>
          </p>
        </div>
        <div className="head-p animated fadeInUp">
          <h1 className="para-head-follow cizul">Follow Us</h1>
          <div className="head-p animated fadeInUp">
            <InstagramOutlined className="icon" />
            <PinterestOutlined className="icon" />
            <YoutubeOutlined className="icon" />
            <FacebookOutlined className="icon" />
            <LinkedinOutlined className="icon" />
            <TwitterOutlined className="icon" />
          </div>
        </div>
      </section>

      <section>
        <Row gutter={[16, 16]} className="animated fadeIn">
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card>
              <h1 className="col-h1 cizul-bold ">I'm Chanakya</h1>
              <div className="des-div">
                <p className="des-para des-para-mobile prime-font  cizul ">
                  Are you a leader in your field? We introduce you to the World.
                </p>
              </div>
              <Chanakyas />
            </Card>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card>
              <h1 className="col-h1  cizul-bold"> I want to be Chanakya</h1>
              <div className="des-div ">
                <p className="des-para cizul des-para-mobile  prime-font">
                  You want to become a leader in your interested domain? Drop
                  your details here.
                </p>
              </div>
              <Leaders />
            </Card>
          </Col>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
     <div className="input-container">
          <div className="email-form">
            <h1>SUBSCRIBE</h1>
            <p className="p-subscribe">
              Subscribe our newsletter to stay updated every moment.
            </p>
          </div>
          <div>

          <Form
          form={form}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
            className="form-style"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                {
                  type: 'email',
                  message: 'Please enter a valid email address!',
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className="sub-input"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className="subs-btn btn-sub-submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
     </Col>
        </Row>
      </section>
    </div>
  );
};

export default LandingPage;
