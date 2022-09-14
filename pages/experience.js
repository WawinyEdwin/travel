import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

const links = [
  {
    name: "Ultimate Luxury",
    href: "/experience"
  },
  {
    name: "Yatch Charters",
    href: "/experience"
  },
  {
    name: "Families",
    href: "/experience"
  },
  {
    name: "Romance",
    href: "/experience"
  },
  {
    name: "Groups|Clubs",
    href: "/experience"
  },
]

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
      <Tabs links={links} />
      <div className="experience_div ">
        <div className="experience_content">
          <p>Now</p>
        </div>
      </div>
    </div>
  );
}
