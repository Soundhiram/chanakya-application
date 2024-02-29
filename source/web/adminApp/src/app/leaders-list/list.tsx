import React, { useState, useEffect } from 'react';
import { Table, Input, Space, Button, Typography, Avatar, Spin, message } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import './style.less';
import { useNavigate } from 'react-router-dom';
import DetailModal from './detail-influencer-model';
import { Leader } from '../../interface/leaderInterface';

const { Paragraph, Text, Title } = Typography;


const LeaderList: React.FC = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedLeaders, setSelectedLeaders] = useState<Leader | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredLeaders = async () => {
      try {
        const response = await axios.get<Leader[]>('http://localhost:3333/api/leader/');
        setLeaders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Leaders:', error);
      }
    };

    filteredLeaders();
  }, []);

  const handleView = (leader: Leader) => {
    setSelectedLeaders(leader);
    setVisible(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredLeaders = leaders.filter((leader) =>
    leader.fullName.toLowerCase().includes(searchValue.toLowerCase())
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
      render: (text: string, record: Leader) => (
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
          placeholder="Search leader"
          onChange={handleSearch}
          style={{ width: 500, margin: 16 }}
        />
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <Spin />
        </div>
      ) : (
        <Table columns={columns} dataSource={filteredLeaders} rowKey="_id" />
      )}

      <DetailModal
        visible={visible}
        closeModal={() => setVisible(false)}
        selectedLeader={selectedLeaders || undefined}
      />
    </div>
  );
};

export default LeaderList;
