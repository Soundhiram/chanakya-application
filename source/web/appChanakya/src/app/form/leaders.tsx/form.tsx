import React, { useState } from 'react';
import { Form, Input, Button, Col, Modal, Row, message, Select } from 'antd';
import { Leader } from '../../../interface/leaderInterface';
import axios from 'axios';
import './style.less';

const Leaders: React.FC = () => {
  const [socialMediaFields, setSocialMediaFields] = useState<string[]>([]);

  const [form] = Form.useForm();

  const onFinish = async (values: Leader) => {
    try {
      const socialMedia = socialMediaFields
        .map((item: string) => item.trim())
        .filter(Boolean);
      const updatedValues = { ...values, socialMedia };

      // You can perform other actions here before or after submitting the form

      const response = await axios.post(
        'http://localhost:3333/api/chanakya/create',
        updatedValues
      );
      console.log('Leader created:', response.data);

      setSocialMediaFields([]);

      form.resetFields();

      message.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error creating leader:', error);
      message.error('Failed to submit form. Please try again later.');
    }
  };

  const addSocialMediaField = () => {
    setSocialMediaFields([...socialMediaFields, '']);
  };

  const handleSocialMediaChange = (value: string, index: number) => {
    const newFields = [...socialMediaFields];
    newFields[index] = value;
    setSocialMediaFields(newFields);
  };

  const removeSocialMediaField = (index: number) => {
    const newFields = [...socialMediaFields];
    newFields.splice(index, 1);
    setSocialMediaFields(newFields);
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true, socialMedia: [''] }}
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
              label="Organisation"
              name="organisation"
              rules={[
                { required: true, message: 'Please input your organisation!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
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
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Contact Number"
              name="watsappNumber"
              rules={[
                {
                  message: 'Please input your WhatsApp number!',
                },
              ]}
            >
              <Input type="number" />
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
          <Col xs={24} sm={24}>
            <Form.Item
              label="Social Media"
              name="socialMedia"
              rules={[
                { required: true, message: 'Please input your social media!' },
              ]}
            >
              {socialMediaFields.map((field, index) => (
                <div key={index} style={{ marginBottom: '8px' }}>
                  <Input
                    value={field}
                    onChange={(e) =>
                      handleSocialMediaChange(e.target.value, index)
                    }
                    style={{ marginRight: '8px' }}
                  />
                  {index > 0 && (
                    <Button
                      type="link"
                      onClick={() => removeSocialMediaField(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="dashed"
                onClick={addSocialMediaField}
                style={{ width: '100%' }}
              >
                Add Social Media Field
              </Button>
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

export default Leaders;
