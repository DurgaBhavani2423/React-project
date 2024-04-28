


import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/Home1.jsx"
import Video from "./pages/video/video.jsx"
import { useState } from "react"


const App = () => {
  const [sidebar,setsidebar] = useState(true)
  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
