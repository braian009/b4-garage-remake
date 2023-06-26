import * as React from "react";

import Head from "next/head";

import { capitalizeString } from "@/utils/capitalizeString";

const EventHead = ({ title, description }) => {
  return (
    <Head>
      <title>{capitalizeString(title)} | B4&apos; Events</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default EventHead;
