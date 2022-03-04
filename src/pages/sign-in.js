import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, Box } from '@mui/material';
import { Space } from '@supabase/ui';
import MyLayout from 'src/supabase/components/MyLayout';
import {
  // useUser,
  // useMyAuth,
  // UserContext,
  useAuth,
} from 'src/supabase/hooks/useAuth';
import Header from '../supabase/components/Header';

function SignIn() {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSignIn = async (e) => {
    e.preventDefault();

    const signIn = await auth.login(email);

    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage('Login link has beent sent.');
    }

    setEmail('');
  };
  const handleSignOut = async (e) => {
    e.preventDefault();

    const signOut = await auth.logout();

    setMessage('Thank you for successfully signing out!');

    setEmail('');
  };
  const LoggedIn = (
    <MyLayout>
      <Card sx={{ background: '#e9e9e9', p: 4 }}>
        <Box sx={boxStyle} direction="vertical" size={6}>
          <b>{message && message}</b>
        </Box>
        <Box sx={boxStyle} direction="vertical" size={6}>
          <Typography variant="title">You're already logged in!</Typography>
          <form style={formStyle}>
            <Button onClick={handleSignOut}>Log out</Button>
          </form>
        </Box>
      </Card>
    </MyLayout>
  );
  const NotLoggedIn = (
    <MyLayout>
      <Card sx={{ background: '#e9e9e9', p: 4 }}>
        <Box sx={boxStyle} direction="vertical" size={6}>
          <b>{message && message}</b>
        </Box>
        <Box sx={boxStyle} direction="vertical" size={6}>
          <Typography variant="title">Login Form</Typography>
          <form style={formStyle} onSubmit={handleSignIn}>
            <input
              style={inputStyle}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
        style={inputStyle}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> */}

            <Button>Log in</Button>
          </form>
        </Box>
      </Card>
    </MyLayout>
  );

  return auth.user ? LoggedIn : NotLoggedIn;
}

export default SignIn;

// styling:
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '300px',
  margin: '0 auto',
};
const inputStyle = {
  width: '100%',
  maxWidth: '200px',
  margin: '5px auto',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};
const buttonStyle = {
  // width: '100%',
  // maxWidth: '150px',
  // margin: '5px auto',
  // padding: '5px',
  // border: '1px solid #ccc',
  // borderRadius: '5px',
  // color: '#8c46b9',
  // '&:hover': {
  //   transition: 'all 0.5s ease-in-out',
  //   background: '#fff',
  //   color: '#000',
  // },
};
const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};
