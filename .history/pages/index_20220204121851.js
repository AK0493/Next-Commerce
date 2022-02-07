import { Grid } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={products.name}></Grid>
        ))}
      </Grid>
    </Layout>
  );
}
