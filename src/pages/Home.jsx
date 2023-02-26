import React from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import url  from "../img/banner01.png";
import '../css/home.css';

export default function Home (props) {

  return (
    <>
      <div className="homeBanner">
          <Banner name="Chez vous, partout et ailleurs" pic={url} height="150px" filter="70%"/>
      </div>
      <div className="home">
        {props.housing.map(({ id, title, cover }) => (
              <Card key={id} title={title} cover={cover} id={id}/>
              ))} 
      </div>
      </>
    );

}