import { AppBar, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function Layout() {
  return (
    <div>
      <Head>
        <title>Next-Commerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>N-Commerce</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
