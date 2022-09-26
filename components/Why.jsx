import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Why() {
  return (
    <div>
      <div className="container mx-auto   py-4  px-3">
        <div className="text-center">
          <h1 className="uppercase lg:text-5xl sm:text-lg italic text-blue-500">
            -Expert Insight-
          </h1>
          <br />
          <h2 className="text-lg">
            AFRICA IS AN INCREDIBLE PLACE TO VISIT, CONSISTENTLY A TOP 5
            DESTINATION FOR MOST TRAVELERS.
          </h2>

          <br />
          <p className="pb-5">
            It is undoubtedly a highly desirable lifetime opportunity, deserving
            of proper planning. <br />
            Live Africa draws on the unique backgrounds of its team, with
            decades of combined experience <br /> working with discerning
            travelers to design and coordinate unforgettable safaris to Africa.
            <br />
            We have personally visited and approved all of the destinations we
            recommend. We <br /> are meticulous about keeping ourselves current
            on the finest destinations Africa has <br /> to offer. Furthermore,
            we are committed to the conservation of Africa’s natural <br /> and
            cultural resources and economic upliftment. This is reflected in
            part by our <br /> choice of local suppliers, lodges and hotels and
            also through our own direct support of important programs and
            initiatives.
          </p>
        </div>
      </div>
      <div className="why_image text-center justify">
        <div className="experience_content space-y-6 pt-10 pb-5 justify-center">
          <h1 className="lg:text-5xl italic">PRIVATE CHARTERS</h1>
          <p className="lg:text-2xl">
            WE HAVE DIRECT ACCESS TO A WIDE RANGE OF AIRCRAFT AND YACHTS <br />
            AVAILABLE FOR CHARTER AT EXCEPTIONAL RATES UNRIVALED.
          </p>
          <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            <Link href={"/contact-us"}>Book The Real Experience.</Link>
          </button>
        </div>
      </div>
      <div className="container mx-auto   py-4  px-3">
        <div className="text-center">
          <h1 className="uppercase lg:text-5xl sm:text-lg italic text-blue-500">
            -VIP ACCESS-
          </h1>
          <br />
          <h2 className="text-xl">
            WITH OVER 1000 TRIPS PLANNED FOR FRIENDS, HONEYMOONERS, <br />
            ORGANIZATIONS AND GROUPS OF ALL SIZES, WE ARE ABLE TO BRING OUR{" "}
            <br />
            VAST KNOWLEDGE AND EXPERTISE TO EACH NEW EXPERIENCE WE PLAN.
          </h2>

          <br />
          <p className="pb-5">
            We have unprecedented access to incredible expert guides in the
            field, exclusive properties and wilderness areas as well as food and{" "}
            <br />
            wine experiences across the continent that allow us to make each
            experience unique and customized for each of our travelers.
          </p>
        </div>
        <div className="grid grid-cols-3 ">
          <Image src={"/chopper.png"} width={200} height={200} alt="Chooper" />
          <Image src={"/safari.png"} width={200} height={200} alt="safari" />
          <Image src={"/chopper.png"} width={300} height={300} alt="chopper" />
        </div>
      </div>
      {/* <div className="why_image text-center justify">
        <div className="experience_content space-y-6 pt-10 pb-5 justify-center">
         
        </div>
      </div> */}
    </div>
  );
}
