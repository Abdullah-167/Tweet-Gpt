import AutoTweet from "@/components/AutoTweet";
import React from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const AutoTweetPage = () => {
  return (
    <>
      <Seo title={"Auto Tweets"} metaDescription={""} />
      <Layout>
        <AutoTweet />
      </Layout>
    </>
  );
};

export default AutoTweetPage;
