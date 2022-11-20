import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import Logement from "./pages/fichelogement";
import Propos from "./pages/apropos"
import Accueil from "./pages/accueil";
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil/>
  },
  {
    path: "/logement",
    element: <Logement />,
  },
  {
    path: "/propos",
    element: <Propos/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);
