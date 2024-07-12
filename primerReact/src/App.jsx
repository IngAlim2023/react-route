import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Default from "./pages/Default";
import About from "./pages/About";

function App() {
  
  return (
    
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Default />}/>
        <Route path='/about' element={<About />}/>
        </Route>
      </Routes>      
    </div>
    
  )
}

export default App
