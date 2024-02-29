import React from 'react';
import { Form, Input, Button } from 'antd';
import { Leader } from '../../../interface/leaderInterface';
import axios from 'axios';



const Leaders: React.FC= () => {
    const onFinish = async (values: Leader) => {
        try {
          const response = await axios.post('http://localhost:3333/api/leader/create', values);
          console.log('Leader created:', response.data);
        } catch (error) {
          console.error('Error creating leader:', error);
        }
      };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
      requiredMark={true} 
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: 'Please input your full name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="WhatsApp Number"
        name="watsappNumber"
        rules={[{ required: true, message: 'Please input your WhatsApp number!' }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Organisation"
        name="organisation"
        rules={[{ required: true, message: 'Please input your organisation!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: 'Please input your designation!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: 'Please input your city!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Social Media"
        name="socialMedia"
        rules={[{ required: true, message: 'Please input your social media!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Leaders;
