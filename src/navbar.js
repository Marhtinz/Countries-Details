import { Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar   = () => {



    return (  
      
        <nav className="navbar">
        <h1>Countries Details</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/details">Countries</Link>
    
        </div>
      </nav>);
}
 
export default Navbar;