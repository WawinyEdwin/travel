import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Why from "../components/Why";

const links = [
  {
    name: "Expert Insight",
    href: "/why-africa"
  },
  {
    name: "Private Charters",
    href: "/why-africa"
  },
  {
    name: "VIP Access",
    href: "/why-africa"
  },
  {
    name: "Testimonials",
    href: "/why-africa"
  },
  {
    name: "Giving Back",
    href: "/why-africa"
  },
]

export default function whyAfrica() {
  return (
    <Layout>
      <Image
        alt="Mountains"
        src="/elephant.jpg"
        layout="responsive"
        objectFit="contain"
        width={900}
        height={299}
      />
      <Tabs links={links} />
      <Why />
    </Layout>
  );
}
