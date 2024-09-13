import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Select } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { getAsinCampaignList, AmzAsinCampaignListRequest, AmzAsinCampaignVO } from '../services/apiService';

const { Option } = Select;

interface DataType {
  key: string;
  storeName: string;
  date: string;
  adSpend: number;
  impressions: number;
  clicks: number;
  cpc: number;
  adOrders: number;
  adSales: number;
  acos: number;
}

export const TableList: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request: AmzAsinCampaignListRequest = {
          asin: 'example-asin', // 替换为实际的 ASIN
          period: {
            startTime: '2023-01-01',
            endTime: '2023-12-31',
            timeType: 'CUSTOM'
          },
          shops: [
            {
              marketplaceId: 'example-marketplace',
              sellerId: 'example-seller',
              timeZone: 'UTC'
            }
          ],
          sortFields: [
            {
              field: 'acos',
              type: 'DESC'
            }
          ],
          pageNum: 1,
          pageSize: 10
        };
        const response = await getAsinCampaignList(request);
        // 将响应数据转换为 DataType 类型
        const formattedData = response.data.items.map((item: AmzAsinCampaignVO, index: number) => ({
          key: index.toString(),
          storeName: item.adGroupName,
          date: item.updateTime,
          adSpend: item.spend.metricValue,
          impressions: item.impressions.metricValue,
          clicks: item.clicks.metricValue,
          cpc: item.cpc.metricValue,
          adOrders: item.advOrderCnt.metricValue,
          adSales: item.advSaleValue.metricValue,
          acos: item.acos.metricValue,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: '店铺名称',
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: '时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '广告花费',
      dataIndex: 'adSpend',
      key: 'adSpend',
      render: (value) => `${value.toFixed(2)} USD`,
    },
    {
      title: '展示',
      dataIndex: 'impressions',
      key: 'impressions',
    },
    {
      title: '点击',
      dataIndex: 'clicks',
      key: 'clicks',
    },
    {
      title: 'CPC',
      dataIndex: 'cpc',
      key: 'cpc',
      render: (value) => `${value.toFixed(2)} USD`,
    },
    {
      title: '广告订单',
      dataIndex: 'adOrders',
      key: 'adOrders',
    },
    {
      title: '广告销售额',
      dataIndex: 'adSales',
      key: 'adSales',
      render: (value) => `${value.toFixed(2)} USD`,
    },
    {
      title: 'ACOS',
      dataIndex: 'acos',
      key: 'acos',
      render: (value) => `${value.toFixed(2)}%`,
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }} className="flex justify-between">
        <div>
          <Input
            placeholder="Search Name"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            style={{ width: 200, marginRight: 8 }}
          />
          <Select defaultValue="all" style={{ width: 120, marginRight: 8 }}>
            <Option value="all">All</Option>
            <Option value="nice">Nice</Option>
            <Option value="developer">Developer</Option>
            <Option value="loser">Loser</Option>
            <Option value="cool">Cool</Option>
            <Option value="teacher">Teacher</Option>
          </Select>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>
          Add
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};