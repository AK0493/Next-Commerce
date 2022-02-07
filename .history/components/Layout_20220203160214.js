import { AppBar } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function Layout() {
  return (
    <div>
      <Head>
        <title>Next-Commerce</title>
      </Head>
      <AppBar></AppBar>
    </div>
  );
}
