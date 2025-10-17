import Footer from "./partOne/component/Footer";
import Header from "./partOne/component/Header";
import MainContent from "./partOne/component/MainContent";
import Jsx from "./partOne/Jsx";

export default function App(){
  return(
    <>
    {/* <Jsx /> */}
    <div style={{background: "#123254"}}>
    <Header/>
    <MainContent/>
    <Footer/>
    </div>
    </>
  )
}