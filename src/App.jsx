import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Homepage from "./pages/Homepage"
import Navbar from "./pages/Navbar"

function App() {

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route element={<Homepage/>} path="/"/>
          <Route element={<Page2/>} path="/page2" />
          <Route element={<Page1/>} path="/page1"/>
        </Routes>
      </BrowserRouter>
      )
}

export default App
