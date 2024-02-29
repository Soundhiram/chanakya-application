import React, { useState } from 'react';
import { Button, Card, Col, Row, Modal } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import Chanakya from '../form/chanakya/form';
import Leaders from '../form/leaders.tsx/form';
import './style.less'

export const LandingPage = () => {
  const [chanakyaModalVisible, setChanakyaModalVisible] = useState(false);
  const [leaderFormModalVisible, setLeaderFormModalVisible] = useState(false);

  const showChanakyaModal = () => {
    setChanakyaModalVisible(true);
  };

  const showLeaderFormModal = () => {
    setLeaderFormModalVisible(true);
  };

  const handleModalCancel = () => {
    setChanakyaModalVisible(false);
    setLeaderFormModalVisible(false);
  };

  return (
    <div>
      <div className="head-div">
        <h1 className="head-h1">Launching Soon</h1>
      </div>
      <div className="head-p">
        <p className="para-head">
          Ignite your inner leadership with your mentors, industry experts,
          leaders, unicorn founders and value adding people. Young Chanakya is
          here provide you a initial thrust. <span>🚀🚀</span>
        </p>
      </div>

      <Row gutter={[16, 16]}>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Card>
            <h1 className="col-h1">I am Chanakya</h1>
            <div className="des-div">
              <p className="des-para">
                Are you a leader in your field? We introduce you to the World.
              </p>
            </div>
            <div className="btn-div">
              <p>Register Now</p>
              <Button className="btn-element" onClick={showChanakyaModal}>
                <LoginOutlined />
              </Button>
            </div>
          </Card>
        </Col>

        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Card>
            <h1 className="col-h1">Become A Chanakya</h1>
            <div className="des-div">
              <p className="des-para">
                You want to become a leader in your interested domain? Drop your
                details here.
              </p>
            </div>
            <div className="btn-div">
              <p>Register Now</p>
              <Button className="btn-element" onClick={showLeaderFormModal}>
                <LoginOutlined />
              </Button>
            </div>
          </Card>
        </Col>
      </Row>

      <Modal
        title="Register as Chanakya"
        visible={chanakyaModalVisible}
        onCancel={handleModalCancel}
        footer={null} 
      >
        <Chanakya onClose={handleModalCancel} />
      </Modal>

      <Modal
        title="Register as Leader"
        visible={leaderFormModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Leaders onClose={handleModalCancel} />
      </Modal>
    </div>
  );
};
