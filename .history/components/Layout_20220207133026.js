import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { ThemeProvider } from '@mui/styles';

export default function Layout({ title, description, children }) {
  const theme = createTheme();
  theme.typography.h1 = {
    fontSize: '1.6rem',
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next-Commerce` : 'Next Commerce'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/">
              <Link>
                <Typography>N-Commerce</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart">
                <Link>Cart </Link>
              </NextLink>
              <NextLink href="/login">
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. N-Commerce</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
