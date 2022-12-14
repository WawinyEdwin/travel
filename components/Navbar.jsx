import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { ChartBarIcon, HomeIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: HomeIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Travel</span>
            <Link href={"/"}>
              <Image
                className="h-15 w-auto sm:h-10 rounded"
                src="/elephant.jpg"
                alt="travel"
                height={20}
                width={100}
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex ">
            <p className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/why-africa">Why Africa</Link>
            </p>
            <p className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/experience">Live the Experience</Link>
            </p>
            <p className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/destinations">Explore Destinations</Link>
            </p>
            <p className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/contact-us">Get in Contact</Link>
            </p>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/signin">Sign in</Link>
            </p>
            <p className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              <Link href="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-3 py-5 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                  <Link href="/contact-us">Get In Contact</Link>
                </p>
                <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                  <Link href="/why-africa">Why Africa</Link>
                </p>
                <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                  <Link href="/experience">Experience It</Link>
                </p>
                <p className="text-base font-medium text-gray-900 hover:text-gray-700">
                  <Link href="/destinations">Explore</Link>
                </p>
              </div>
              <div>
                <p className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                  <Link href="/signup">Sign up</Link>
                </p>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing Explorer?{" "}
                  <p className="text-indigo-600 hover:text-indigo-500">
                    <Link href="/signin">Sign in</Link>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
