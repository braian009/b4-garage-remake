import * as React from "react";

import Head from "next/head";
import { capitalizeString } from "@/utils/capitalizeString";

const ProductsHead = ({ title }) => {
  return (
    <Head>
      <title>{capitalizeString(title)} | B4&apos;s Store </title>
      <meta
        name="description"
        content={`Shop ${capitalizeString(title)} on B4's Store`}
      />
    </Head>
  );
};

export default ProductsHead;
