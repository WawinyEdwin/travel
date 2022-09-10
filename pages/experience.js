import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function experience() {
  return (
    <div>
      <Navbar />
      <div>
        <Image
          src="/wildbeest.jpg"
          layout="responsive"
          objectFit="contain"
          width={900}
          height={299}
          alt="experience"
        />
      </div>
      <Tabs />
    </div>
  );
}
