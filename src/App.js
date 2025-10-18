import Card from "./partOne/Card";
import Footer from "./partOne/component/Footer";
import Header from "./partOne/component/Header";
import MainContent from "./partOne/component/MainContent";
import Jsx from "./partOne/Jsx";

export default function App(){
  const title = "Rayhan"
  const description = "A passionate developer."
  const imageUrl = "https://cdni.iconscout.com/illustration/premium/thumb/male-user-image-illustration-svg-download-png-6515860.png"
  return(
    <>
    {/* <Jsx /> */}
    {/* <div style={{background: "#123254"}}>
    <Header/>
    <MainContent/>
    <Footer/>
    </div> */}
    <div style={{display: "flex", justifyContent: "center" , alignItems: "center", height: "100vh", background:"#222f3e"}}>
    <Card title={title} description={description} imageUrl={imageUrl} />
    </div>
    </>
  )
}