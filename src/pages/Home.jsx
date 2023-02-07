import React from "react";
import Card from "../components/card";
import Banner from "../components/banner";
import Nav from "../components/nav"
import Api from "../hooks/api";
import '../css/home.css'

export default function Home () {
  return (
    // <div className="home">
    //   <h1>My progression</h1>
    //   <div>Welcome to this site devoted to your programming progression</div>
    //   <br />
    // </div>
    <>
    <div className="homeNav">
      <Nav/>
    </div>
    <div className="homeBanner">
        <Banner/>

    </div>
    <div className="home">
        {/* <Card title="premiere card"/>
        <Card/> */}
        <Api/>
    </div>
    </>
  );
}