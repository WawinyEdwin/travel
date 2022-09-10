import React from 'react'

export default function Tabs() {
  return (
    <div>
        <div className="flex text-center items-center justify-between border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10">
        <a
          href="/signup"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Ultimate Luxury
        </a>
        <a
          href="/signup"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Yatch Charters
        </a>
        <a
          href="/signup"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Individuals/Families
        </a>
        <a
          href="/signup"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Romance
        </a>
        <a
          href="/signup"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Groups/Clubs
        </a>
      </div>
    </div>
  )
}
