import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next-Commerce</title>
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
            <NextLink href="#">
              <Link>
                <Typography>Cart</Typography>
              </Link>
            </NextLink>
            <NextLink href="#">
              <Link>
                <Typography></Typography>
              </Link>
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
