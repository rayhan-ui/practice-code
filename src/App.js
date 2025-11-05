
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./partThree/Home.jsx";
import About from "./partThree/About.jsx";
import Contact from "./partThree/Contacts.jsx";
import Products from "./partThree/Products.jsx";
import FetchAPI from "./partThree/FetchAPI.jsx";
import LocalStorenSessionMng from "./partThree/LocalStorenSessionMng.jsx";

export default function App(){
  return(
    // <FetchAPI />
    <LocalStorenSessionMng />
  )  
}