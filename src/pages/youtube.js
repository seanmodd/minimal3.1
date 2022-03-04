import React from 'react';
import { Card } from '@mui/material';
import { Typography, Space } from '@supabase/ui';
import MyProtectedRoute from 'src/supabase/components/MyProtectedRoute';
import MyLayout from 'src/supabase/components/MyLayout';
import { useUser, RequireAuth } from '../supabase/hooks/useAuth';
import Header from '../supabase/components/Header';

export default function Profile() {
  RequireAuth();

  const { user } = useUser();

  return (
    <MyLayout>
      <Card sx={{ background: '#e9e9e9', p: 4 }}>
        <Space direction="vertical" size={6}>
          <Typography.Text>you're signed in</Typography.Text>
          <Typography.Text strong>Email: {user.email}</Typography.Text>
          <Typography.Text type="success">User data:</Typography.Text>

          <Typography.Text>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Typography.Text>
        </Space>
      </Card>
    </MyLayout>
  );
}
