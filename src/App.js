import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Logement from "./pages/fichelogement";
import Propos from "./pages/apropos"
import Accueil from "./pages/accueil";
import './css/App.css'

// class App extends Component {
//   render() {
//     return (
//     <Router>
//         <div>
//           <h2>Welcome to React Router Tutorial</h2>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav mr-auto">
//             <li><Link to={'/'} className="nav-link"> Home </Link></li>
//             <li><Link to={'/propos'} className="nav-link">Contact</Link></li>
//             <li><Link to={'/logement'} className="nav-link">About</Link></li>
//           </ul>
//           </nav>
//           <hr />
//           <Routes>
//               <Route exact path='/' element={Accueil} />
//               <Route path='/propos' element={Propos} />
//               <Route path='/logement' element={Logement} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

    // <Router>
          //   </Router>
          /* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/propos'} className="nav-link">Contact</Link></li>
            <li><Link to={'/logement'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr /> */

// export default App;

class App extends Component {
  render() {
    return (
          <div className='wrapper'>
          <Routes>
              <Route exact path='/' element={<Accueil/>} />
              <Route path='/propos' element={<Propos/>} />
              <Route path='/logement' element={<Logement/>} />
          </Routes>
         </div>
    );
  }
}

export default App;