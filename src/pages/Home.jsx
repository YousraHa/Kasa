import React from "react";
import Banner from "../components/banner";
import Nav from "../components/nav"
import Api from "../hooks/api";
import url  from "../img/banner2.png"

// import url  from "../../public/banner2.png"
import '../css/home.css'

export default function Home () {

  // const url = '../../public/banner2.png';
  return (
    <>
    {/* <div className="homeNav">
      <Nav/>
    </div> */}
    <div className="homeBanner">
        <Banner name="Chez vous, partout et ailleurs" pic={url}/>
    </div>
    <div className="home">
        <Api/>
    </div>
    </>
  );
}