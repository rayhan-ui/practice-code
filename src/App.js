import { lazy, Suspense } from "react";

const About = lazy(() => import("./partThree/About"))

export default function App(){
  return(
    <>
    
    <Suspense fallback={<h2>Loading...</h2>}>
      <About />
    </Suspense>
    </>
  )  
}