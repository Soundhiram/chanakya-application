import React from 'react';
import { Modal, Typography, Divider, Avatar } from 'antd';
import { Leader } from '../../interface/leaderInterface';

const { Paragraph, Text, Title } = Typography;

interface DetailModalProps {
  visible: boolean;
  closeModal: () => void;
  selectedLeader?: Leader;
}

const DetailModal: React.FC<DetailModalProps> = ({ visible, closeModal, selectedLeader }) => {
  return (
    <Modal
      title={<Title level={3}>Leaders Details</Title>}
      visible={visible}
      onCancel={closeModal}
      footer={null}
      destroyOnClose={true} 
    >
      {selectedLeader && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ marginLeft: 16 }}>
              <Title level={4}>{selectedLeader.fullName}</Title>
              <Text type="secondary">{selectedLeader.socialMedia}</Text>
            </div>
          </div>
          <Divider />
          <Paragraph>
            <strong>Full Name:</strong> {selectedLeader.fullName}
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> {selectedLeader.email}
          </Paragraph>
          <Paragraph>
            <strong>WhatsApp Number:</strong> {selectedLeader.watsappNumber}
          </Paragraph>
          <Paragraph>
            <strong>Organisation:</strong> {selectedLeader.organisation}
          </Paragraph>
          <Paragraph>
            <strong>Designation:</strong> {selectedLeader.designation}
          </Paragraph>
          <Paragraph>
            <strong>City:</strong> {selectedLeader.city}
          </Paragraph>
          <Paragraph>
            <strong>Social Media:</strong> {selectedLeader.socialMedia}
          </Paragraph>
        </div>
      )}
    </Modal>
  );
};

export default DetailModal;
