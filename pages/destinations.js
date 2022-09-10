import Image from "next/image";
import React from "react";
import Destination from "../components/Destination";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";

export default function destinations() {
  return (
    <Layout>
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
      <div className="div_with_image">
        
      </div>
    </Layout>
  );
}
