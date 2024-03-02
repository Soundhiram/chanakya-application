import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Modal, message, Select } from 'antd';
import axios from 'axios';
import { Chanakya } from '../../../interface/leaderInterface';
import './style.less';

const Chanakyas: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: Chanakya) => {
    try {
      const socialMediaArray: string[] =
        values.socialMedia as unknown as string[];
      const socialMediaString = socialMediaArray.join(', ');
      const updatedValues = { ...values, socialMedia: socialMediaString };
      const response = await axios.post(
        'http://localhost:3333/api/chanakya/create',
        updatedValues
      );
      console.log('Leader created:', response.data);
      form.resetFields();
      message.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error creating leader:', error);
      message.success('Cheack Fields Correctly');
    }
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        requiredMark={true}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: 'Please input your full name!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
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
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="WhatsApp Number"
              name="watsappNumber"
              rules={[
                {
                  required: true,
                  message: 'Please input your WhatsApp number!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Organisation"
              name="organisation"
              rules={[
                { required: true, message: 'Please input your organisation!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Designation"
              name="designation"
              rules={[
                { required: true, message: 'Please input your designation!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please input your city!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
          <Form.Item
              label="Social Media"
              name="socialMedia"
              rules={[
                { required: true, message: 'Please input your social media!' },
              ]}
            >
              <Select mode="tags" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <div className="btn-form">
            <Button type="default" htmlType="submit" className="btn-submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Chanakyas;
