import Head from 'src/supabase/components/Head';
import Header from 'src/supabase/components/Header';
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import the emojipicker:
import EmojiPicker from 'src/components/emojipicker';
import { Stack } from '@mui/material';
import {
  useTheme,
  // styled
} from '@mui/material/styles';
import styled from 'styled-components';

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
  const StyledButton = styled.button`
    color: ${(props) => props.theme.palette.text.secondary};
    border-color: ${(props) => props.theme.palette.text.secondary};
    border-width: 1px;
    border-radius: 0.5rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.dark};
      color: ${(props) => props.theme.palette.common.white};
      border-color: ${(props) => props.theme.palette.common.white};
    }
  `;
  return (
    <>
      <Head />
      <Header />
      <Grid sx={gridStyles} style={{ backgroundColor: '#000' }} item m={16}>
        <Stack alignItems="center" spacing={16}>
          <CommonButton color="primary">Primary Color</CommonButton>
          <CommonButton color="secondary">Secondary Color</CommonButton>
          <CommonButton sx={{ ...buttonStyles }}>sx=buttonStyles</CommonButton>
          <CommonButton sx={buttonStyles}>sx=buttonStyles</CommonButton>
          <MyButton>MyButton</MyButton>
          <StyledButton>StyledButton</StyledButton>
          <EmojiPicker />
        </Stack>
      </Grid>
    </>
  );
};

export default Authentication;
