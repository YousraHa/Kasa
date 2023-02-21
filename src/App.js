import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from './pages/Housing';
import Error from "./pages/Error";
import Nav from "./components/nav";
import Footer from "./components/footer";
import housing from './hooks/data.json'

// import Api from "./hooks/api";

//recuperer liste ici et passer en props

function App(props) {

  let {
    houseId
  } = useParams();

  const [items, setItems] = useState([housing]);

  // if(houseId ==! items.id){
  //   // return <Navigate to="/error"/>
  //   console.log('hi')
  // }

  return (
  <>
      <div className="homeNav">
        <Nav/>
      </div>
      <Routes>
          <Route path="/" element={<Home housing={housing}/>} />
          <Route path="about" element={<About />} />
          <Route  exact path="housing/:houseId" element={<Housing housing={housing}/>}/>
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
  </>
  );
}

export default App;