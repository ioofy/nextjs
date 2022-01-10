import Head from "next/head";
import React from "react";

type MetaDataProps = {
 title: string;
};

const MetaData: React.FC<MetaDataProps> = (props) => {
 return (
  <Head>
   <title>{props.title} | Nextjs-Graphql Exam</title>
   <meta name="description" content="Website exam for nextjs graphql" />
  </Head>
 );
};

export default MetaData;
