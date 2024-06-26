"use client"
import React from 'react';
import { Card, List } from 'antd';

const data = [
  {
    title: 'Caption Mobility',
  },
  {
    title: 'Radeon',
  },
  {
    title: 'Trident Electric',
  },
  {
    title: 'OLA',
  },
];

const CustomerListApp: React.FC = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);

export default CustomerListApp;