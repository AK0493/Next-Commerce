import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
//import useStyles from '../utils/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Layout({ children }) {
  const classes = useStyles;
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
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. N-Commerce</Typography>
      </footer>
    </div>
  );
}
