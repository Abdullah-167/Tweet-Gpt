import Dashboard from "@/components/Dashboard";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const DashboardPage = () => {
  return (
    <>
      <Seo title={"Login Tweet GPT"} metaDescription={""} />
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
};

export default DashboardPage;
