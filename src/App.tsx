import { Outlet } from "react-router-dom"
import Header from "./components/Header"

import FadeInWrapper from "./components/FadeInWrapper"



const App = () => {
  return(
    <FadeInWrapper>
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="w-full flex-grow mt-20 ">
        <Outlet />
      </main>
    </div>
  </FadeInWrapper>
  
  )
}

export default App