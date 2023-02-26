// import * as React from "react";
import {React} from "react";
import {useParams } from "react-router-dom";
import DropDown1 from "../components/dropdown";
import DropDown2 from "../components/dropdown2";
import Slider from "../components/carousel";
import Error from "../pages/Error";
import "../css/housing.css"

export default function Housing (props) {

  let params = useParams();

  const {
    housing
  } = props

  const getHouse = housing.findIndex(house => house.id === params.houseId)

  const oneHouse = housing[getHouse]

  // const {
  //   title,
  //   description,
  //   equipments,
  //   host,
  //   location,
  //   pictures,
  //   rating,
  //   tags
  // } = oneHouse

  if (oneHouse === undefined) { 
    return <Error/>
  }

  return (

    <div className="housing">
      <Slider slides={oneHouse.pictures}/>
      <div className="info">
        <div className="title">
          <div className="mainTitle">
            <h1>{oneHouse.title}</h1>
            <p>{oneHouse.location}</p>
          </div>
          <div className="tags">
          {oneHouse.tags.map((tag, i)=><p key={i}>{tag}</p>)}
          </div>
        </div>
          <div className="host">
            <div className="floatright">
              <p>{oneHouse.host.name}</p>
              <img src={oneHouse.host.picture} alt="host" />
            </div>
            <div className="stars">
              {Array.from({length: oneHouse.rating}, (elem, i) =><span key={i} className="material-icons">star</span>)}
              {Array.from({length: 5 - oneHouse.rating}, (elem, i) =><span key={i} className="material-icons" style={{color: "#E3E3E3"}}>star</span>)}
            </div>
          </div>
        </div>
        <div className="dropdown2">
          <DropDown1 title="Description" text={oneHouse.description}/>
          <DropDown2 title="Equipements" text={oneHouse.equipments}/>
        </div>
    </div>
  );


// return (

//     <div className="housing">

//       <Banner pic={pictures[0]} height="415px"/>
//       <div className="info">
        
//         <div className="title">
//           <div className="mainTitle">
//             <h1>{title}</h1>
//             <p>{location}</p>
//           </div>
//           <div className="tags">
//           {tags.map(tag=><p>{tag}</p>)}
//           </div>
//         </div>
//           <div className="host">
//             <div className="floatright">
//               <p>{host.name}</p>
//               <img src={host.picture} alt="host picture" />
//             </div>
//             <div>
//               {Array.from({length: rating}, (i) =><span key={i} className="material-icons">star</span>)}
//               {Array.from({length: 5 - rating}, (i) =><span key={i} className="material-icons" style={{color: "#E3E3E3"}}>star</span>)}
//             </div>
//           </div>
//         </div>
//         <div className="dropdown2">
//           <DropDown1 title="Description" text={description}/>
//           <DropDown2 title="Equipements" text={equipments}/>
//         </div>
//     </div>
//   );
}
// }