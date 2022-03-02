import React from 'react';
import { Auth, Typography, Space } from '@supabase/ui';
import { Card } from '@mui/material';
import { AuthRedirect } from '../hooks/authUser';
import { supabase } from '../utils/initSupabase';

import Head from '../components/Head';
import Header from '../components/Header';

const AuthPage = () => {
  AuthRedirect();

  return (
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
};

export default AuthPage;
