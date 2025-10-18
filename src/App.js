import Card from "./partOne/Card";
import Footer from "./partOne/component/Footer";
import Header from "./partOne/component/Header";
import MainContent from "./partOne/component/MainContent";
import Event from "./partOne/Event.jsx";
import Jsx from "./partOne/Jsx";
import State from "./partOne/State.jsx";

export default function App(){
  return(
    <>
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0", background: "#181931ff", height: "100vh", alignContent: "center", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <Event />
    </div>
    </>
  )  
}