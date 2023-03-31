import ChartComponent from "./ChartComponent";

const GeneratedMost = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-10 lg:gap-3 justify-between items-center px-5 mt-5">
      <div className="bg-white w-full xl:min-w-[730px] px-4 pt-3 md:pt-5 md:pb-1  rounded-lg">
        <h1 className="text-[20px] text-primary p-3 mb-4">
          Tweet that generated most Follower
        </h1>
        <div>
          {data.map((item, index) => {
            return (
              <div
                className="bg-[#F2F9FB] px-2 py-2 md:py-2 md:px-2 flex items-center justify-between mb-5 rounded-lg gap-3 md:gap-5"
                key={index}
              >
                <h3 className="bg-white text-[10px] md:text-sm px-3 md:px-6 py-4 md:py-4 w-full xl:max-w-[300px] rounded-lg">
                  {item.text}
                </h3>
                <p className="text-[10px] md:text-base text-[#445C6D]">
                  {item.time}
                </p>
                <p className="text-[10px] md:text-base text-[#445C6D] pr-8">
                  {item.followers}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full xl:max-w-[300px] bg-white pt-7 pb-6 rounded-xl">
        <h2 className="text-[#153648] text-xl font-medium pb-8 px-8">Daily follower gain</h2>
        <ChartComponent />
      </div>
    </div>
  );
};

export default GeneratedMost;

const data = [
  {
    text: "The more accurate, the more better experience will be......",
    time: "Posted: 10:45:16 AM",
    followers: "1545+ Followers",
  },
  {
    text: "The more accurate, the more better experience will be......",
    time: "Posted: 10:45:16 AM",
    followers: "1545+ Followers",
  },
  {
    text: "The more accurate, the more better experience will be......",
    time: "Posted: 10:45:16 AM",
    followers: "1545+ Followers",
  },
];
