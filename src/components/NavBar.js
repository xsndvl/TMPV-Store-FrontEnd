import  { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from "react-router-dom"
import Collections from "./Collections"
import Contact from "./Contact"
import Home from "./Home"

const NavBar = () => {
    return(
        <Router>
            <div className="NavBar">
                <h3 className="tmpv">TMPV</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/collections">Collections</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul> 
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/collections" element={<Collections/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    )
}

export default NavBar