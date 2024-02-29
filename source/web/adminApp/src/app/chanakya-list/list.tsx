import React, { useState, useEffect } from 'react';
import { Table, Input, Space, Button, Typography, Avatar, Spin, message } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import './style.less';
import { useNavigate } from 'react-router-dom';
import DetailModal from './detail-influencer-model';
import { Chanakya } from '../../interface/leaderInterface';

const { Paragraph, Text, Title } = Typography;


const ChanakyaList: React.FC = () => {
  const [chanakyas, setChanakyas] = useState<Chanakya[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedChanakyas, setSelectedChanakyas] = useState<Chanakya | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredChanakyas = async () => {
      try {
        const response = await axios.get<Chanakya[]>('http://localhost:3333/api/chanakya/');
        setChanakyas(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chanakyas:', error);
      }
    };

    filteredChanakyas();
  }, []);

  const handleView = (chanakya: Chanakya) => {
    setSelectedChanakyas(chanakya);
    setVisible(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredChanakyas = chanakyas.filter((chanakya) =>
    chanakya.fullName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'WhatsApp Number',
      dataIndex: 'watsappNumber',
      key: 'watsappNumber',
    },
    {
      title: 'Organisation',
      dataIndex: 'organisation',
      key: 'organisation',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Social Media',
      dataIndex: 'socialMedia',
      key: 'socialMedia',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Chanakya) => (
        <Space size="middle">
          <Button onClick={() => handleView(record)} icon={<EyeOutlined />} />
        </Space>
      ),
    },
  ];

 
  return (
    <div>
      <div className="search-box">
        <Input.Search
          placeholder="Search chanakya"
          onChange={handleSearch}
          style={{ width: 500, margin: 16 }}
        />
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <Spin />
        </div>
      ) : (
        <Table columns={columns} dataSource={filteredChanakyas} rowKey="_id" />
      )}

      <DetailModal
        visible={visible}
        closeModal={() => setVisible(false)}
        selectedChanakya={selectedChanakyas || undefined}
      />
    </div>
  );
};

export default ChanakyaList;
