import Head from "next/head";

const Seo = ({title,metaDescription}) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content={metaDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export default Seo