import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { useIntl } from 'umi';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <Card>
      <Alert
        message={intl.formatMessage({
          id: 'pages.welcome.alertMessage',
          defaultMessage: 'Faster and stronger heavy-duty components have been released.',
        })}
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 48,
        }}
      />
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        <SmileTwoTone /> Benchmark News <HeartTwoTone twoToneColor="#eb2f96" /> You
      </Typography.Title>
    </Card>
  );
};

export default Admin;
