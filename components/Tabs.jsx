import Link from "next/link";
import React from "react";

export default function Tabs() {
  return (
    <div className="mx-auto">
      <div className="flex text-center items-center justify-between border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10">
        <p className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
          <Link href="/signup">Ultimate Luxury</Link>
        </p>
        <p className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
          <Link href="/signup">Yatch Charters</Link>
        </p>
        <p className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
          <Link href="/signup">Individuals|Families</Link>
        </p>
        <p className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
          <Link href="/">Romance</Link>
        </p>
        <p className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
          <Link href="/">Groups|Clubs</Link>
        </p>
      </div>
    </div>
  );
}
