import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Why from "../components/Why";

export default function whyAfrica() {
  return (
    <div>
      <Navbar />
      <div>
        <img src="/elephant.jpg" height={300} width={"auto"} alt="experience" />
      </div>
      <Tabs />
      <Why />
      
    </div>
  );
}
