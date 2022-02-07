import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next-Commerce</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>N-Commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. N-Commerce</Typography>
      </footer>
    </div>
  );
}
