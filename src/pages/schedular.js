
import LayoutV2 from "../components/Layout/LayoutV2";
import Scheduler from "@/components/Schedular";
import Seo from "@/components/Seo";

const SchedularPage = () => {
  return (
    <>
      <Seo title={"Onboarding"} metaDescription={""} />
      <LayoutV2>
        <Scheduler />
      </LayoutV2>
    </>
  );
};

export default SchedularPage;
