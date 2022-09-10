import React from "react";
import Navbar from "../components/Navbar";
import TravelForm from "../components/TravelForm";

export default function contactUs() {
  return (
    <div>
      <Navbar />
      <div>
        <img src="/zebra.jpg" height={300} width={"auto"} alt="experience" />
      </div>
      <TravelForm />
    </div>
  );
}
