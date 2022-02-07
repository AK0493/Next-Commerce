import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';
import NextLink from 'next/link';
export default function ProductPage() {
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
    <div>
      <NextLink></NextLink>
      <h1>{product.name}</h1>
    </div>
  );
}
