import Card from "./partOne/Card";
import Footer from "./partOne/component/Footer";
import Header from "./partOne/component/Header";
import MainContent from "./partOne/component/MainContent";
import ConditionalRendering from "./partOne/ConditionalRendering.jsx";
import Event from "./partOne/Event.jsx";
import Jsx from "./partOne/Jsx";
import ListNKeys from "./partOne/ListNKeys.jsx";
import State from "./partOne/State.jsx";
import Count from "./partTwo/Count.jsx";
import Live from "./partTwo/UseRef.jsx";
import UseEffect from "./partTwo/UseEffect.jsx";
import UseRef from "./partTwo/UseRef.jsx";

export default function App(){
  return(
    <>
    <div style={{ textAlign: "center", marginBottom: "40px", justifyContent: "center", }}>
      {/* <ConditionalRendering /> */}
      {/* <ListNKeys /> */}
      {/* <Count/> */}
      {/* <UseEffect /> */}
      <UseRef />
    </div>

    </>
  )  
}