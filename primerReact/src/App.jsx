import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  
  return (
    
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>      
    </div>
    
  )
}

export default App
