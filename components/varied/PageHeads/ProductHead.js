import * as React from "react";

import Head from "next/head";

import { capitalizeString } from "@/utils/capitalizeString";

const ProductHead = ({ title }) => {
  return (
    <Head>
      <title>{capitalizeString(title)} | B4&apos;s Store</title>
    </Head>
  );
};

export default ProductHead;
