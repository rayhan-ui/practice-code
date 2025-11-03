
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./partThree/Home.jsx";
import About from "./partThree/About.jsx";
import Contact from "./partThree/Contacts.jsx";
import Products from "./partThree/Products.jsx";

export default function App(){
  return(
    <BrowserRouter>
      <nav
      style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          background: "#222",
        }}>
        <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>Home</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to={"/about"}>About</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to={"/contact"}>contact</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to={"/product"}>Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element={<Products />}/>
      </Routes>
    </BrowserRouter>
  )  
}