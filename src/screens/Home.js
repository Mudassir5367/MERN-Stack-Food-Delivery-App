import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className="m-3"><Cards /></div>
      <div><Footer/></div>
    </>
  );
}
