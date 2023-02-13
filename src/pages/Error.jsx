import React from "react";
import Nav from "../components/nav";
import '../css/error.css'

export default function Error () {
  return (
    <>
    {/* <Nav/> */}
    <div className="error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
    </>
  );
}