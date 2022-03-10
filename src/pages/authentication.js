import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import the emojipicker:
import EmojiPicker from 'src/components/emojipicker';
import { Stack } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

const CommonButton = ({ children, color, disabled, size, sx, variant }) => (
  <Button
    color={color}
    disabled={disabled}
    size={size}
    sx={sx}
    variant={variant}
  >
    {children}
  </Button>
);

const Authentication = () => {
  const buttonStyles = {
    fontSize: '0.875rem',
    fontWeight: 600,
    // textTransform: 'capitalize',
    color: '#fff',
    borderRadius: 2.5,
    '&.MuiButton-text': {
      backgroundColor: '#009be5',
      '&:hover': {
        backgroundColor: '#006db3',
        color: '#fff',
      },
    },
    '&.MuiButton-outlined': {
      color: '#fff',
      borderColor: '#fff',
      '&:hover': {
        backgroundColor: '#000',
      },
    },
  };
  const gridStyles = {
    marginTop: '2rem',
    backgroundColor: '#ebebeb',
    borderRadius: '0.5rem',
    padding: '1rem',
    // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    // boxShadow: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    // transform: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    // change background on hover:
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transition: 'all 0.3s ease-in-out',
    },
  };
  const MyButton = ({ children, color, disabled, size, sx, variant }) => {
    const theme = useTheme();
    sx = {
      ...sx,
      backgroundColor: theme.palette.text.primary.main,
      background: theme.palette.text.primary.main,
      color: theme.palette.text.primary.main,
    };
    return (
      <Button
        color={color}
        disabled={disabled}
        size={size}
        sx={sx}
        variant={variant}
      >
        {children}
      </Button>
    );
  };

  const theme = useTheme();
  console.log('This is theme from authentication: ', theme);
  return (
    <Grid sx={gridStyles} item m={16}>
      <Stack alignItems="center" spacing={16}>
        <CommonButton sx={buttonStyles} variant="contained">
          Add user
        </CommonButton>
        <CommonButton sx={buttonStyles} variant="text">
          Add user
        </CommonButton>
        <MyButton>Add user</MyButton>
        <EmojiPicker />
      </Stack>
    </Grid>
  );
};

export default Authentication;
