// i18n
import '../locales/i18n';

// highlight
import '../utils/highlight';

// scroll bar
import 'simplebar/src/simplebar.css';

// lightbox
import 'react-image-lightbox/style.css';

// map
import 'mapbox-gl/dist/mapbox-gl.css';

// editor
import 'react-quill/dist/quill.snow.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

// fullcalendar
import '@fullcalendar/common/main.min.css';
import '@fullcalendar/daygrid/main.min.css';

import PropTypes from 'prop-types';
import cookie from 'cookie';
// next
import { useState } from 'react';
import Head from 'next/head';
import App from 'next/app';
//
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// @mui
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// redux
import { store, persistor } from 'src/redux/store';
// utils
import { getSettings } from 'src/utils/settings';
// contexts
import { SettingsProvider } from 'src/contexts/SettingsContext';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
// theme
import ThemeProvider from 'src/theme';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
// components
import Settings from 'src/components/settings';
import { ChartStyle } from 'src/components/chart';
import RtlLayout from 'src/components/RtlLayout';
import ProgressBar from 'src/components/ProgressBar';
import ThemeColorPresets from 'src/components/ThemeColorPresets';
import NotistackProvider from 'src/components/NotistackProvider';
import ThemeLocalization from 'src/components/ThemeLocalization';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';
// import { Auth } from '@supabase/ui';
// import { supabase } from 'src/initSupabase';
// Check our docs
// https://docs-minimals.vercel.app/authentication/ts-version

// import { AuthProvider } from 'src/contexts/JWTContext';
// import { AuthProvider } from 'src/contexts/Auth0Context';
// import { AuthProvider } from 'src/contexts/FirebaseContext';
// import AuthProvider from 'src/contexts/SupabaseContext';
// import { AuthProvider } from 'src/contexts/AwsCognitoContext';

// graphql provider and client
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from 'src/graphql/apollo';
// ----------------------------------------------------------------------
import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { AuthProvider } from 'src/supabase/hooks/useAuth';
import { UserContextProvider } from 'src/supabase/hooks/useAuth';

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

export const apolloClient = getApolloClient();
export default function MyApp(props) {
  const { Component, pageProps, settings } = props;
  // console.log('This is from supabase: ', supabase);
  // console.log('This is from supabase.auth: ', supabase.auth.currentUser);
  // console.log(
  //   'This is from supabase.auth.currentUser.email: ',
  //   supabase?.auth?.currentUser?.email
  // );

  const [isGuest, setIsGuest] = useState();

  // supabase?.auth?.currentUser?.email === undefined
  //   ? () => {
  //       setIsGuest(true);
  //     }
  //   : () => {
  //       setIsGuest(false);
  //     };
  // supabase?.auth?.currentUser?.email == !undefined && setIsGuest(false);
  console.log('This is isGuest: ', isGuest);
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {/* <AuthProvider> */}
      {/* <Auth.UserContextProvider supabaseClient={supabase}> */}
      {/* <UserProvider supabaseClient={supabaseClient}> */}

      <UserContextProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CollapseDrawerProvider>
                <SettingsProvider defaultSettings={settings}>
                  <ApolloProvider client={apolloClient}>
                    <ThemeProvider>
                      <NotistackProvider>
                        <MotionLazyContainer>
                          <ThemeColorPresets>
                            <ThemeLocalization>
                              <RtlLayout>
                                <ChartStyle />
                                <Settings />
                                <ProgressBar />

                                {getLayout(<Component {...pageProps} />)}
                              </RtlLayout>
                            </ThemeLocalization>
                          </ThemeColorPresets>
                        </MotionLazyContainer>
                      </NotistackProvider>
                    </ThemeProvider>
                  </ApolloProvider>
                </SettingsProvider>
              </CollapseDrawerProvider>
            </LocalizationProvider>
          </PersistGate>
        </ReduxProvider>
      </UserContextProvider>
      {/* </UserProvider> */}
      {/* </Auth.UserContextProvider> */}
      {/* </AuthProvider> */}
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
