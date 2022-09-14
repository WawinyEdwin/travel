import Link from "next/link";
import React from "react";

export default function Tabs({ links }) {
  // console.log(links);
  return (
    <div className="container mx-auto pt-0">
      <div className="flex text-center items-center justify-between border-b-2 border-gray-100 py-0 md:justify-center  lg:overflow-hidden sm:overflow-auto">
        {links.map((link, index) => (
          <p key={index} className="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-small text-white shadow-sm hover:bg-indigo-700">
            <Link href={link.href}>{link.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}
