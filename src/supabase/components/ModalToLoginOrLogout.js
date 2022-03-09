import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  IconButton,
  Typography,
  Stack,
  Modal,
  Backdrop,
  Button,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import { Space, Typography as SupabaseTypography } from '@supabase/ui';
import { useAuth } from 'src/supabase/hooks/useAuth';

function ModalToLoginOrLogout() {
  const router = useRouter();
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const signIn = await auth.login(email);

    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage('Login link has beent sent.');
      router.push('/youtube');
    }

    setEmail('');
  };
  const handleSignOut = async (e) => {
    e.preventDefault();

    const signOut = await auth.logout();
    router.push('/');
    setMessage('Logout succesful');

    setEmail('');
  };

  const MyModalToLogIn = (
    <>
      <button
        style={{
          width: '100%',
          maxWidth: '150px',
          margin: '5px auto',
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#e8f0fe',
          color: '#8c46b9',
          transition: 'all 0.5s ease-in-out',
        }}
        onClick={handleOpen}
      >
        Login
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Card> */}
            <div className="authbox">
              <Space className="authlogin" direction="vertical" size={8}>
                {/* <Space direction="vertical" size={8}> */}
                <div className="authlogin">
                  <SupabaseTypography.Title className="header" level={3}>
                    <div
                      style={{
                        color: '#fff',
                      }}
                      className="authlogin"
                    >
                      Log Into Your CarX Account
                    </div>
                  </SupabaseTypography.Title>
                  <Stack sx={{ pt: 5, pb: 2 }}>
                    <Typography variant="subtitle4">
                      {message && message}
                    </Typography>
                    <Typography variant="subtitle3">Email address</Typography>
                  </Stack>
                  <Paper
                    component="form"
                    onSubmit={handleSignIn}
                    sx={{
                      p: '2px 4px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      background: '#e8f0fe',
                      borderRadius: '5px',
                      // width: 400,
                    }}
                  >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                      <EmailIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder=""
                      inputProps={{ 'aria-label': 'search google maps' }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Paper>
                </div>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Button
                    sx={{
                      width: '100%',
                      borderRadius: '4px',
                      height: '40px',
                    }}
                    type="submit"
                  >
                    {' '}
                    <IconButton
                      sx={{ px: '9px', color: 'white' }}
                      aria-label="login"
                    >
                      <LockOpenIcon sx={{ width: '20px' }} />
                    </IconButton>{' '}
                    <Typography
                      sx={{
                        color: 'white',
                        fontWeight: '500',
                        fontSize: '16px',
                      }}
                      variant="subtitle3"
                    >
                      Sign in
                    </Typography>
                  </Button>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                  >
                    <Typography sx={{ color: '#8b5cf6' }} variant="subtitle3">
                      Don't have an account?
                    </Typography>
                    <Typography sx={{ color: '#8b5cf6' }} variant="subtitle3">
                      Just enter your email! No password needed 😅
                    </Typography>
                  </Stack>
                </Stack>
              </Space>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
  const MyModalToLogOut = (
    <>
      <Typography
        variant="subtitle3"
        style={{
          width: '100%',
          maxWidth: '150px',
          margin: '5px auto',
          // padding: '5px',
          // border: '1px solid #ccc',
          // borderRadius: '5px',
          // backgroundColor: '#e8f0fe',
          // color: '#8c46b9',
          transition: 'all 0.5s ease-in-out',
        }}
        onClick={handleOpen}
      >
        Logout
      </Typography>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Card> */}
            <div className="authbox">
              <Space className="authlogin" direction="vertical" size={8}>
                {/* <Space direction="vertical" size={8}> */}
                <div className="authlogin">
                  <SupabaseTypography.Title className="header" level={3}>
                    <div
                      style={{
                        color: '#fff',
                      }}
                      className="authlogin"
                    >
                      Sure you want to log out?
                    </div>
                  </SupabaseTypography.Title>
                  <Stack sx={{ pt: 5, pb: 2 }}>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Button
                        sx={{
                          width: '100%',
                          borderRadius: '4px',
                          height: '40px',
                        }}
                        type="submit"
                        onClick={handleSignOut}
                      >
                        {' '}
                        <IconButton
                          sx={{ px: '9px', color: 'white' }}
                          aria-label="login"
                        >
                          <ExitToAppIcon sx={{ width: '20px' }} />
                        </IconButton>{' '}
                        <Typography
                          sx={{
                            color: 'white',
                            fontWeight: '500',
                            fontSize: '16px',
                          }}
                          variant="subtitle3"
                        >
                          Log out
                        </Typography>
                      </Button>
                    </Stack>
                  </Stack>
                </div>
              </Space>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );

  return auth.user ? MyModalToLogOut : MyModalToLogIn;
}

export default ModalToLoginOrLogout;

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
  background: '#e8f0fe',
  fontSize: '1.0rem',
  color: '#8b5cf6',
  padding: '5px 5px 5px 10px',
  height: '30px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};
const buttonStyle = {
  width: '100%',
  maxWidth: '150px',
  margin: '5px auto',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  color: '#8c46b9',
  '&:hover': {
    transition: 'all 0.5s ease-in-out',
    background: '#fff',
    color: '#000',
  },
};
const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};
// styling for fade:
const Fade = React.forwardRef((props, ref) => {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: '#181818',
  // border: '2px solid #000',
  // boxShadow: '0 0 10px rgba(104, 104, 104, 0.6)',
  p: 4,
};
