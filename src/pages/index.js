import { useUser, Auth } from '@supabase/supabase-auth-helpers/react';
import { Card, Typography, Space, Button, Icon } from '@supabase/ui';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useEffect, useState } from 'react';

const LoginPage = () => {
  const { user, error } = useUser();
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('test').select('*');
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);
  console.log('this is user: ', user);
  console.log('this is error: ', error);
  console.log('this is data: ', data);
  if (!user)
    return (
      <div style={{ maxWidth: '420px', margin: '96px auto' }}>
        <Card>
          <Space direction="vertical" size={8}>
            {error && error.p.message}
            <div>
              <img
                src="https://app.supabase.io/img/supabase-dark.svg"
                width="96"
              />
              <Typography.Title level={3}>Welcome to ShopCarX</Typography.Title>
            </div>
            <Auth
              supabaseClient={supabaseClient}
              // providers={['google', 'github']}
              view="sign_in"
              socialLayout="horizontal"
              socialButtonSize="xlarge"
            />
          </Space>
        </Card>
      </div>
    );

  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <Card>
        <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
        <p>user:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>client-side data fetching with RLS</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Card>
    </div>
  );
};

export default LoginPage;
