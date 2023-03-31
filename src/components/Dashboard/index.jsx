import React from "react";
import Cards from "./Cards";
import GeneratedMost from "./GeneratedMost";
import Queue from "./Queue";

const Dashboard = () => {
  return (
    <div>
      <Cards />
      <GeneratedMost />
      <Queue />
    
    </div>
  );
};

export default Dashboard;
