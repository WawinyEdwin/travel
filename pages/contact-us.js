import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import TravelForm from "../components/TravelForm";

export default function contactUs() {
  return (
    <div>
      <Navbar />
      <div>
        <Image
          src="/zebra.jpg"
          layout="responsive"
          objectFit="contain"
          width={900}
          height={299}
          alt="experience"
        />
      </div>
      {/* <TravelForm /> */}
    </div>
  );
}
