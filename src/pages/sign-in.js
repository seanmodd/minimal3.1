import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import { Typography, Space } from '@supabase/ui';
import MyLayout from 'src/supabase/components/MyLayout';
import { useUser, RequireAuth } from '../supabase/hooks/authUser';

import Header from '../supabase/components/Header';

function SignIn() {
  return (
    <MyLayout>
      <Card sx={{ background: '#e9e9e9', p: 4 }}>
        <Space direction="vertical" size={6}>
          <Typography.Text>you're signed in</Typography.Text>
          <h1>Sign In</h1>
          Enter
        </Space>
      </Card>
    </MyLayout>
  );
}

export default SignIn;
