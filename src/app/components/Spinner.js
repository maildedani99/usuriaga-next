// components/Spinner.js

import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => (
  <div className="flex w-full  h-screen">
    <div className=" mx-auto mt-40">
      <ThreeDots
        height={80}
        width={80}
        color="#dac895"
        secondaryColor="#f3f3f3"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  </div>
);

export default Spinner;
