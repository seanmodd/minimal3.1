import React from 'react';
import { Typography, Card, Button, Stack } from '@mui/material';
import MyProtectedRoute from 'src/supabase/components/MyProtectedRoute';
import MyLayout from 'src/supabase/components/MyLayout';
import { useRouter } from 'next/router';
import { useUser, RequireAuth } from '../../supabase/hooks/useAuth';
import Header from '../../supabase/components/Header';

export default function Profile() {
  RequireAuth();
  const router = useRouter();
  const { user } = useUser();

  const handleChooseMovies = async (e) => {
    router.push('/youtube/swipe-movies');
  };
  const handleWatchlist = async (e) => {
    router.push('/youtube/watchlist');
  };
  return (
    <MyLayout>
      <Card sx={{ background: '#e9e9e9', p: 4 }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography variant="h3">Welcome!</Typography>
          <Typography variant="h5">{user?.email}</Typography>
          <Stack direction="row" spacing={4}>
            <Button onClick={handleChooseMovies}>Choose Movies</Button>
            <Button onClick={handleWatchlist}>Watchlist</Button>
          </Stack>

          <Typography variant="title">JSON User data:</Typography>

          <Typography variant="carTitle" sx={{ fontWeight: 400 }}>
            <pre> {JSON.stringify(user, null, 2)}</pre>
          </Typography>
        </Stack>
      </Card>
    </MyLayout>
  );
}
