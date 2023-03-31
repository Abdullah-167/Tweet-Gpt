import React from "react";
import Sidebar from "./Sidebar";
import ResponsiveNav from "./ResponsiveNav";
import TopNav from "./TopNav";
import Tabs from "../Schedular/Tabs";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <TopNav />
        <div className="lg:flex relative hidden w-full lg:max-w-[300px]">
          <div className="fixed h-full">
            <Sidebar />
          </div>
        </div>
        <div className="lg:hidden flex w-full">
          <ResponsiveNav />
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default Layout;
