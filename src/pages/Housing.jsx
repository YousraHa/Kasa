// import * as React from "react";
import React from "react";
import { Redirect, useParams, Navigate } from "react-router-dom";
import DropDown1 from "../components/dropdown";
import DropDown2 from "../components/dropdown2";
import Banner from "../components/banner";
import Error from "../pages/Error"
import "../css/housing.css"

export default function Housing (props) {

  let params = useParams();

  console.log(params.houseId)
  const {
    housing
  } = props

  const getHouse = housing.findIndex(house => house.id === params.houseId)

  //gerer les mauvais id, erreur
  const oneHouse = housing[getHouse]

console.log(params.houseId, 'params')
console.log(oneHouse.id, 'houseid')
// console.log()

  // if(params.houseId =! oneHouse.id){
  //   return <Navigate to="/error" replace={true}/>
  // }
  console.log(oneHouse.id, 'propsgethouse')

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


// if(params.houseId ==! oneHouse.id){
//     // return <Navigate to="/error"/>
//     console.log('hi')
//   }


return (

    <div className="housing">

      <Banner pic={pictures[0]} height="415px"/>
      <div className="info">
        
        <div className="title">
          <div className="mainTitle">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="tags">
          {tags.map(tag=><p>{tag}</p>)}
          </div>
        </div>
          <div className="host">
            <div className="floatright">
              <p>{host.name}</p>
              <img src={host.picture} alt="host picture" />
            </div>
            <div>
              {Array.from({length: rating}, (i) =><span key={i} className="material-icons">star</span>)}
              {Array.from({length: 5 - rating}, (i) =><span key={i} className="material-icons" style={{color: "#E3E3E3"}}>star</span>)}
            </div>
          </div>
        </div>
        <div className="dropdown2">
          <DropDown1 title="Description" text={description}/>
          <DropDown2 title="Equipements" text={equipments}/>
        </div>
    </div>
  );
}