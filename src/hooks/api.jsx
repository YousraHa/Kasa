
// import axios from "axios";

// export default function Api (){

//     const [storedItems, setItems] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         handleItems();
//       }, []);

//       const handleItems = async () => {
//         setLoading(true);
//         try {
//           const result = await axios.get(
//             "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json",
//             {headers:{
//                 // 'Access-Control-Allow-Origin": '*'
//                 'Content-Type': 'text/plain',
//                 'Access-Control-Allow-Origin' : '*',
//                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//             }}
//           );
//           setItems(result.data);
//           console.log(setItems(result.data), 'data');
//         } catch (err) {
//           setError(err.message || "Unexpected Error!");
//         } finally {
//           setLoading(false);
//         }
//       };
//       console.log(storedItems.map(item=> item))
//       return (
//         <>
//         {storedItems}
//         </>
//         // {console.log(storedItems)}
//         // <div className="">
//         //   <div>
//         //     <h1>Posts</h1>
//         //     {loading && <p>Posts are loading!</p>}
//         //     {error && <p>{error}</p>}
//         //     <ul>
//         //       {[storedItems]?.map((item) => (
//         //         <li key={item.id}>{item.title}</li>
//         //       ))}
//         //     </ul>
//         //   </div>
//         // </div>
//       );

// }


// export default function Api () {

// useEffect(() => {
//   const url = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";

//   const fetchData = async () => {
//     try {
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   fetchData();
// }, []);

//   return <div></div>;
// };

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// function Api () {
//     const [advice, setAdvice] = useState("");
//     const url = "./data.json";

//     useEffect(() => {
//         // const url = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url)
//                 const json = await response.json();
//                 console.log(json, 'json');
//                 setAdvice(json);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         // const fetchData = () =>{
//         //     fetch(url)
//         //     .then((response) => response.json())
//         //     .then((data) => console.log(data));
//         // }

//         fetchData();
//     }, []);

//     return (
//         <>
//         test
//             <>{advice}</>
//         </>
//     );
// };

// export default Api;

import React, { useEffect, useState } from "react";
import housing from './data.json'
import Card from "../components/card";

const Api =() =>{
    return (
        <>
                {housing.map(({ id, title, cover }) => (
                    // console.log(id)
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))} 
        </>
    )
}

export default Api