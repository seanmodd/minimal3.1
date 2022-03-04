import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import { useRouter } from 'next/router';
import { Typography, Space } from '@supabase/ui';
import { useAuth } from 'src/supabase/hooks/useAuth';
import Header from './Header';

function MyProtectedRoute({ children }) {
  const router = useRouter();
  const auth = useAuth();
  const protectedRoute = (
    <div style={{ minHeight: '100vh', background: '#181818' }}>
      <Header />
      <div style={{ maxWidth: '620px', margin: '96px auto' }}>{children}</div>
    </div>
  );

  return auth.user ? protectedRoute : <div>You are not signed in</div>;
}

export default MyProtectedRoute;
