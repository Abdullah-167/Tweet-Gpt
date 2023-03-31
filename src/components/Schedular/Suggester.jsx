import Image from "next/image";

const Suggester = () => {
  return (
    <div className="max-w-[370px] bg-[#FCFDFF] shadow-2xl rounded-xl px-5 pb-2 pt-5">
      <div className="">
        {suggestData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between px-5 items-center mb-5 bg-white py-3 rounded-xl cursor-pointer">
                <p className="text-[#738391] text-base mb-3 cursor-pointer">
                  {item.title}
                </p>
                <Image
                  src="edit-icon.svg"
                  alt=""
                  width={35}
                  height={35}
                  className="cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Suggester;

const suggestData = [
  {
    title: "Design Principles",
  },
  {
    title: "Helo",
  },
  {
    title: "Design Principles",
  },
];
