import Image from "next/image";
import React from "react";
import Layout from '../components/Layout'
import TravelForm from "../components/TravelForm";

export default function contactUs() {
  return (
    <Layout>
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
      <TravelForm />
    </Layout>
  );
}
