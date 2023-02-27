import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from './pages/Housing';
import Error from "./pages/Error";
import Nav from "./components/nav";
import Footer from "./components/footer";
import housing from './data/data.json'

function App() {
  
  // let {
  //   houseId
  // } = useParams();

  const [items] = useState(housing);

   return (
   <>
       <div className="homeNav">
         <Nav/>
       </div>
       <Routes>
           <Route path="/" element={<Home housing={items}/>} />
           <Route path="about" element={<About />} />
           <Route  path="housing/:houseId" element={<Housing housing={items}/>}/>
           <Route path="*" element={<Error />} />
       </Routes>
       <Footer/>
   </>
   );

}

export default App;