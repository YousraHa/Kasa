import React from "react";
import Nav from "../components/nav";
import Banner from '../components/banner';
import Footer from "../components/footer";
import url from "../img/banner1.png"
import '../css/about.css'

export default function About () {
  return (
    <div className="about">
      <Nav/>
      <Banner pic={url}/>
        <div className="">
          <h1>ABOUT PAGE</h1>
          <div>Welcome to ABOUT PAGE</div>
          <br />
        </div>
        <Footer/>
    </div>
  );
}