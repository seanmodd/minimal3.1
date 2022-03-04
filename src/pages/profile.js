import React from 'react';
import { Card } from '@mui/material';
import { Typography, Space } from '@supabase/ui';
import { useUser, RequireAuth } from '../supabase/hooks/useAuth';

import Header from '../supabase/components/Header';

export default function Profile() {
  RequireAuth();

  const { user } = useUser();

  return (
    <div style={{ minHeight: '100vh', background: '#181818' }}>
      <Header />
      {user && (
        <div style={{ maxWidth: '620px', margin: '96px auto' }}>
          <Card sx={{ background: '#e9e9e9', p: 4 }}>
            <Space direction="vertical" size={6}>
              <Typography.Text>you're signed in</Typography.Text>
              <Typography.Text strong>Email: {user.email}</Typography.Text>
              <Typography.Text type="success">User data:</Typography.Text>
              <h1>This is my profile!</h1>
              <Typography.Text>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </Typography.Text>
            </Space>
          </Card>
        </div>
      )}
    </div>
  );
}
