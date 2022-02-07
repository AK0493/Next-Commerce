import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query();
  const product = data.products.find((el) => el.slug === slug);
  return <div></div>;
}
