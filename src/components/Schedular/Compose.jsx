import React, { useState } from "react";
import RichText from "./RichText";

const Compose = () => {
  return (
    <div className="hidden sm:block">
      <div className="mt-10">
        <h1 className="px-5 mb-5">Your Content</h1>
        <RichText />
      </div>
    </div>
  );
};

export default Compose;
