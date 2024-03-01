import React from 'react';
import { Modal, Typography, Divider, Avatar } from 'antd';
import { Chanakya } from '../../interface/leaderInterface';

const { Paragraph, Text, Title } = Typography;

interface DetailModalProps {
  visible: boolean;
  closeModal: () => void;
  selectedChanakya?: Chanakya;
}

const DetailModal: React.FC<DetailModalProps> = ({ visible, closeModal, selectedChanakya }) => {
  return (
    <Modal
      title={<Title level={3}>Chanakyas Details</Title>}
      visible={visible}
      onCancel={closeModal}
      footer={null}
      destroyOnClose={true} 
    >
      {selectedChanakya && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ marginLeft: 16 }}>
              <Title level={4}>{selectedChanakya.fullName}</Title>
              <Text type="secondary">{selectedChanakya.socialMedia}</Text>
            </div>
          </div>
          <Divider />
          <Paragraph>
            <strong>Full Name:</strong> {selectedChanakya.fullName}
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> {selectedChanakya.email}
          </Paragraph>
          <Paragraph>
            <strong>WhatsApp Number:</strong> {selectedChanakya.watsappNumber}
          </Paragraph>
          <Paragraph>
            <strong>Organisation:</strong> {selectedChanakya.organisation}
          </Paragraph>
          <Paragraph>
            <strong>Designation:</strong> {selectedChanakya.designation}
          </Paragraph>
          <Paragraph>
            <strong>City:</strong> {selectedChanakya.city}
          </Paragraph>
          <Paragraph>
            <strong>Social Media:</strong> {selectedChanakya.socialMedia}
          </Paragraph>
        </div>
      )}
    </Modal>
  );
};

export default DetailModal;
