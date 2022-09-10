import { LockClosedIcon } from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="https://josecuono.dev/video1.mp4"
            type="video/mp4"
            autoplay
            muted
            loop
          ></video>
        </div>
        <div className="video-content space-y-2">
          <p className="font-light text-transform: lowercase">
            WITHIN THE EXPANSIVE WILDS OF THE AFRICAN BUSHVELD <br /> LIES A
            WORLD UNLIKE ANY OTHER: <br />
            IT IS, QUITE SIMPLY, A MAGNIFICENT WORLD, <br />
            WHERE EACH DAY IS MORE REMARKABLE THAN THE LAST
          </p>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-blue bg-white py-2 px-4 text-sm font-medium text-blue-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Link href="/experience">Plan Your Next Adventure</Link>
            <span className="absolute inset-y-0 right-10 flex items-center pl-3">
              <ArrowRightCircleIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
