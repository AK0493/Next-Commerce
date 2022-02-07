import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';
import NextLink from 'next/link';
import { Card, Grid, Link, List, ListItem, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import Image from 'next/image';
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
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.brand} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Typography>Price</Typography>
                </Grid>
                <Grid item>
                  <Typography>$ {product.price}</Typography>
                </Grid>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
