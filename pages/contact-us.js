import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
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
      <div className="text-center">
        <h1 className="text-transform: uppercase lg:text-5xl italic pb-8 text-blue-500">-Contact Us-</h1>
        <h2 className="text-2xl">-FOR AN UNFORGETTABLE AFRICAN EXPERIENCE CONTACT US TODAY-</h2>
        <br />
        <p>Email: <Link href={'mailto:admin@travel.com'} className="text-blue-300">admin@travel.com</Link> | Phone: 123-456-789 | Fax: 678-456-900</p>
      </div>
      <TravelForm />
    </Layout>
  );
}
