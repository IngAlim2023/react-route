import { Outlet,Link } from "react-router-dom";

const Layout = () =>{
    return <div>
        <div>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/default">D</Link>
            <hr /> 
            <Link to="/about">About</Link>
        </div>
        <hr />
        <Outlet/>
    </div>
}
export default Layout;