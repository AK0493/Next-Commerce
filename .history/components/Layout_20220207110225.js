import {
  AppBar,
  Container,
  createTheme,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next-Commerce` : 'Next Commerce'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
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
    </div>
  );
}
