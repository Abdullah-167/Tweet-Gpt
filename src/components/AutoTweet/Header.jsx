const Header = () => {
  return (
    <div className="bg-white px-2 mx-4 md:px-10 max-w-[1560px] rounded-xl pt-6 pb-12 mt-10">
      <div>
        <h1 className="text-3xl font-medium text-[#153648] pb-4">Example Tweet</h1>
        <div>
          <h4 className="bg-[#F2F9FB] text-[#738391] font-light text-base p-4 md:p-6 rounded-lg">
            Mastering software design principles can take your coding game to
            the next level! Embrace modularity, favor composition over
            inheritance, and always strive for readability. Improve your
            codebase and watch your projects thrive! 🚀 #SoftwareDesign
            #CodingTips #CleanCode
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
