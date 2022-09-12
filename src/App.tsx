import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import About from "./pages/About"
import Items from "./pages/Items"
import Home from "./pages/Home"
import './App.css'
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {


  return (
    
    <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/items" element={<Items/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
    </Container>
    </ShoppingCartProvider>
    
  
  )
}

export default App
