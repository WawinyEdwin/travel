import Image from "next/image";
import React from "react";

export default function Why() {
  return (
    <div>
      <div className="mx-auto items-center justify-center text-center  py-0 px-3">
        <div className="text-center">
          <h1 className="text-3-xl">Expert Insight</h1>
          <br />
          <h2>
            AFRICA IS AN INCREDIBLE PLACE TO VISIT, CONSISTENTLY A TOP 5
            DESTINATION FOR MOST TRAVELERS.
          </h2>

          <br />
          <p className="pb-5">
            It is undoubtedly a highly desirable lifetime opportunity, deserving
            of proper planning. <br />
            Live Africa draws on the unique backgrounds of its team, with
            decades of combined experience working with discerning travelers to
            design and coordinate unforgettable safaris to Africa. We have
            personally visited and approved all of the destinations we
            recommend. We are meticulous about keeping ourselves current on the
            finest destinations Africa has to offer. Furthermore, we are
            committed to the conservation of Africa’s natural and cultural
            resources and economic upliftment. This is reflected in part by our
            choice of local suppliers, lodges and hotels and also through our
            own direct support of important programs and initiatives.
          </p>
        </div>
        <div className="why_image text-center justify">
          <div className="experience_content space-y-2">
            <h1>PRIVATE CHARTERS</h1>
            <p>
              WE HAVE DIRECT ACCESS TO A WIDE RANGE OF AIRCRAFT AND YACHTS
              AVAILABLE FOR CHARTER AT EXCEPTIONAL RATES UNRIVALED.
            </p>
            <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Book The Real Experience.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
