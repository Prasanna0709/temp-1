import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Homepage from "./pages/Homepage"
import UsersPage from "./pages/UsersPage"
import ProductsPage from "./pages/ProductsPage"
import Navbar from "./pages/Navbar"

function App() {

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
        </Routes>
      </BrowserRouter>
      )
}

export default App
