import React, { useState, useEffect } from 'react';
import { Card } from '@mui/material';
import { Typography, Space } from '@supabase/ui';

import Header from './Header';

function MyLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#181818' }}>
      <Header />
      <div style={{ maxWidth: '620px', margin: '96px auto' }}>{children}</div>
    </div>
  );
}

export default MyLayout;
