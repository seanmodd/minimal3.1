import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, Box } from '@mui/material';
import { Space } from '@supabase/ui';
import MyLayout from 'src/supabase/components/MyLayout';
import { useUser } from 'src/supabase/hooks/useAuth';
import Header from '../supabase/components/Header';

function SignIn() {
  // const auth = useAuth();

  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  // console.log('This is the user: ', user);
  console.log('This is the useUser default export: ', useUser());
  const handleSignIn = async (e) => {
    e.preventDefault();

    const signIn = await user.login(email);

    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage('Login link has beent sent.');
    }

    setEmail('');
  };
  return (
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

            <Button>Sign In</Button>
          </form>
        </Box>
      </Card>
    </MyLayout>
  );
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
