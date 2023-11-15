import React from "react";
import Head from "./Navbar/Navbar";
// import Carousel from "./Body/Carousel";
import Card from "./Body/Card";
import Footer from "./Footer/Footer";
// import Carousel from "./Body/Carousel";

const header = () => {
  return (
    <>
      <Head />
      {/* <Carousel /> */}
      <h1>TEST</h1>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Carousel /> */}
      <Footer />
    </>
  );
};

export default header;
