import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Header from '../layout/header';
// import { ThemeProvider } from "styled-components";
// import { defaultTheme } from '../theme';
// import { GlobalStyle } from '../theme/global.state';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
