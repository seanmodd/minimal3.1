import React, { useState, useEffect } from 'react';
import { useAuth, useUser, RequireAuth } from 'src/supabase/hooks/useAuth';
import { Stack, Typography, Card, Button } from '@mui/material';
import { supabase } from 'src/supabase/initSupabase';
import axios from 'axios';
import { useRouter } from 'next/router';
import MovieCard from 'src/supabase/components/MovieCard';
import Layout from 'src/supabase/components/MyLayout';

const Watchlist = () => {
  RequireAuth();
  const router = useRouter();
  const auth = useAuth();
  const [movies, setMovies] = useState([]);

  const getWatchlist = async () => {
    const movies = [];
    const { data, error } = await supabase
      .from('watchlists')
      .select('movie_id')
      .match({ user_id: auth.user?.id });

    if (error) {
      console.log(error);
    }

    if (data) {
      for (const movie of data) {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.movie_id}`,
          {
            params: {
              api_key: '0aed2924832fa55ced9826750093e57f',
            },
          }
        );

        movies.push(data);
      }

      setMovies(movies);
    }
  };

  useEffect(() => {
    getWatchlist();
  });

  const removeFromWatchlist = async (id) => {
    const { data, error } = await supabase
      .from('watchlists')
      .delete()
      .match({ movie_id: id, user_id: auth.user.id });

    if (error) {
      console.log(error);
    }

    if (data) {
      getWatchlist();
    }
  };

  const renderWatchlist = () =>
    movies.map((movie) => (
      <div key={movie.id}>
        <MovieCard movie={movie} />
        <button
          className="button"
          onClick={() => removeFromWatchlist(movie.id)}
        >
          Remove from Watchlist
        </button>
      </div>
    ));

  const handleChooseMovies = async (e) => {
    router.push('/youtube/swipe-movies');
  };
  const handleHome = async (e) => {
    router.push('/youtube');
  };
  const handleSignOut = async (e) => {
    e.preventDefault();

    const signOut = await auth.logout();
    router.push('/sign-in');
  };

  return (
    <Layout>
      <Card className="moviecard" sx={boxStyle}>
        <Stack
          direction="column"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography variant="h3">Welcome!</Typography>
          <h1>Watchlist</h1>
          <Stack direction="row" spacing={4}>
            <Button onClick={handleHome}>Home</Button>
            <Button onClick={handleChooseMovies}>Swipe Movies</Button>
            <Button onClick={handleSignOut}>Sign out</Button>
          </Stack>

          <div className="grid">{renderWatchlist()}</div>
        </Stack>
      </Card>
    </Layout>
  );
};

export default Watchlist;
const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  p: 4,
  width: '1000px',
  alignItems: 'center',
  textAlign: 'center',
};
