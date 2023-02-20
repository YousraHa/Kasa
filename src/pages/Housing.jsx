// import * as React from "react";
import React from "react";
import { useParams } from "react-router-dom";
import DropDown1 from "../components/dropdown";
import DropDown2 from "../components/dropdown2";
import Banner from "../components/banner";
import "../css/housing.css"

export default function Housing (props) {

  let params = useParams();
  console.log(params.houseId)
  const {
    housing
  } = props

  const getHouse = housing.findIndex(house => house.id === params.houseId)
  const oneHouse = housing[getHouse]
  console.log(oneHouse, 'propsgethouse')

  const {
    id,
    title,
    cover,
    description,
    equipments,
    host,
    location,
    pictures,
    rating,
    tags
  } = oneHouse

  return (
    <div className="housing">
      {/* <h1>Fiche logement</h1> */}

      {/* <DropDown text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/> */}
      <Banner pic={pictures[0]} height="415px"/>
      <div className="info">
        
        <div className="title">
          <h1>{title}</h1>
          <p>{location}</p>
          {/* <ul className="tags">
            {tags.map(tag=><li>{tag}</li>)}
          </ul> */}
          <div className="tags">
          {tags.map(tag=><p>{tag}</p>)}
          </div>
        </div>

        <div className="host">
          <p>{host.name}</p>
          <img src={host.picture} alt="host picture" />
          <span className="material-symbols-outlined">
            star
          </span>
        </div>

        </div>
        <div className="dropdown2">
          <DropDown1 title="Description" text={description}/>
          <DropDown2 title="Equipements" text={equipments}/>
        </div>
      {/* <br /> */}
    </div>
  );
}