import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';
import NextLink from 'next/link';
import { Grid, Link } from '@mui/material';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
export default function ProductPage() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((el) => el.slug === slug);
  if (!product) {
    return (
      <div>
        <h1>Product not Found!</h1>
      </div>
    );
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <h1>{product.name}</h1>
        <NextLink href="/" passHref>
          <Link>Back to Home</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}></Grid>
      </Grid>
    </Layout>
  );
}
