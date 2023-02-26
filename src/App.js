import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from './pages/Housing';
import Error from "./pages/Error";
import Nav from "./components/nav";
import Footer from "./components/footer";
import housing from './hooks/data.json'

function App(props) {
  
  let {
    houseId
  } = useParams();

  const [items, setItems] = useState([housing]);

   return (
   <>
       <div className="homeNav">
         <Nav/>
       </div>
       <Routes>
           <Route path="/" element={<Home housing={housing}/>} />
           <Route path="about" element={<About />} />
           <Route  exact={true} path="housing/:houseId" element={<Housing housing={housing}/>}/>
           <Route exact={true} path="*" element={<Error />} />
       </Routes>
       <Footer/>
   </>
   );

}

export default App;