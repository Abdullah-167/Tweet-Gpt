import Card from "./Card";
import Tabs from "./Tabs";

const Scheduler = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-10 md:pb-0 pb-20">
      <div>
        <Card />
      </div>
      {/* <div className="y">
        <Tabs />
      </div> */}
    </div>
  );
};

export default Scheduler;
