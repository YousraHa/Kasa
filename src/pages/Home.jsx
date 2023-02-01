import React from "react";
import Card from "../components/card";
import Banner from "../components/banner";
import Nav from "../components/nav"
import '../css/home.css'

export default function Home () {
  return (
    // <div className="home">
    //   <h1>My progression</h1>
    //   <div>Welcome to this site devoted to your programming progression</div>
    //   <br />
    // </div>
    <>
    <div className="nav">
      <Nav/>
    </div>
    <div className="homeBanner">
        <Banner/>

    </div>
    <div className="home">
        <Card />
        <Card/>
    </div>
    </>
  );
}