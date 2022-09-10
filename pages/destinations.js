import Image from "next/image";
import React from "react";
import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function destinations() {
  return (
    <div>
      <Navbar />
      <div>
        <Image
          src="/hotel.jpg"
          layout="responsive"
          objectFit="contain"
          width={900}
          height={299}
          alt="experience"
        />
      </div>
      <Tabs />
      <Destination />
    </div>
  );
}
