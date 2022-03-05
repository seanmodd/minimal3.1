import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TinderCard from 'react-tinder-card';
import MovieCard from 'src/supabase/components/MovieCard';
import { supabase } from 'src/supabase/initSupabase';
import { useAuth, useUser, RequireAuth } from 'src/supabase/hooks/useAuth';
import MyLayout from 'src/supabase/components/MyLayout';
import { Card, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';

const Home = () => {
  RequireAuth();
  const router = useRouter();
  const auth = useAuth();
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState('');

  const fetchMovies = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          page: Math.random() * 501,
          api_key: '0aed2924832fa55ced9826750093e57f',
        },
      }
    );

    setMovies(data.results);
  };

  const addToWatchlist = async (movie) => {
    const { data, error } = await supabase
      .from('watchlists')
      .insert({ movie_id: movie.id, user_id: auth.user.id });

    if (error) {
      console.log(error);
    }

    if (data) {
      setMessage('Movie has been added to your watchlist!');
    }
  };

  useEffect(() => {
    if (auth.user) {
      fetchMovies();
    }
  }, [auth]);

  const renderMovies = () =>
    movies.map((movie) => (
      <TinderCard
        onSwipe={(direction) =>
          direction === 'right' ? addToWatchlist(movie) : null
        }
        key={movie.id}
      >
        <MovieCard movie={movie} swipe />
      </TinderCard>
    ));

  const handleClick = async (e) => {
    router.push('/youtube');
  };
  const handleWatchlist = async (e) => {
    router.push('/youtube/watchlist');
  };
  return (
    <MyLayout>
      {message && message}
      <Stack
        direction="column"
        spacing={4}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Stack direction="row" spacing={4}>
          <Button onClick={handleClick}>Home</Button>
          <Button onClick={handleWatchlist}>Watchlist</Button>
        </Stack>

        <div className="movie-wrapper">
          {!auth.user && <h2>Please sign up!</h2>}
          {renderMovies()}
        </div>
      </Stack>
    </MyLayout>
  );
};

export default Home;
