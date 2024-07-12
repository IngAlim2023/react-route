import { useState } from "react";

const Home = () =>{
    const [show, setshow] = useState(true);
    
return <div>
        <h1>Home</h1>
        <button onClick={()=>setshow(!show)}>Mostrar h3</button>
        <h3 hidden={show}>Show</h3>
    </div>
}
export default Home;