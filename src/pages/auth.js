import React from 'react';
import { Auth, Typography, Space } from '@supabase/ui';
import { Card } from '@mui/material';
// import { RequireAuth } from 'src/supabase/hooks/useAuth';
import { supabase } from '../supabase/initSupabase';

import Head from '../supabase/components/Head';
import Header from '../supabase/components/Header';

const AuthPage = () => (
  // RequireAuth();

  <div className="authbackground">
    <Head />
    <Header />
    <div className="authcontainer">
      {/* <Card> */}
      <Card
        sx={{
          p: 3,
          background: '#181818',
        }}
        className="authlogin"
      >
        <Space className="authlogin" direction="vertical" size={8}>
          {/* <Space direction="vertical" size={8}> */}
          <div className="authlogin">
            <Typography.Title className="header" level={3}>
              <div
                style={{
                  color: '#fff',
                }}
                className="authlogin"
              >
                Welcome
              </div>
            </Typography.Title>
          </div>
          <Auth
            className="authlogin"
            supabaseClient={supabase}
            view="sign_in"
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
        </Space>
      </Card>
    </div>
  </div>
);
export default AuthPage;
