import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function experience() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src="/wildbeest.jpg"
          height={300}
          width={"auto"}
          alt="experience"
        />
      </div>
      <Tabs />
    </div>
  );
}
