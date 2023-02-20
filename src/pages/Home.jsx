import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import url  from "../img/banner01.png";
import '../css/home.css';

export default function Home (props) {

// console.log(props.housing, 'props home');
console.log(props.height, "height");

  return (
    <>
      <div className="homeBanner">
          <Banner name="Chez vous, partout et ailleurs" pic={url} height="150px"/>
      </div>
      <div className="home">
        {props.housing.map(({ id, title, cover }) => (
              <Card key={id} title={title} cover={cover} id={id}/>
              ))} 
      </div>
      </>
    );

}