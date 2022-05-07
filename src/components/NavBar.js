import { Link, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const NavBar = () => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState()

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location])

    console.log("current path", currentPath)
    
    let navigate = useNavigate()
    const handleBack = () => {
        if (currentPath != "/"){
            navigate(-1)
        }
    }

    return(
            <div className="NavBar">
                <div onClick={handleBack} className="backButton">
                    <button>
                        <h3>Back</h3>
                    </button>
                </div>

                <h3 className="tmpv main_tmpv"><Link to="/" className="tmpv_header">TMPV</Link></h3>

                <div className="TMPV_home">
                    <h3 className="tmpv"><Link to="/products/hoodies" className="tmpv_header">Hoodies</Link></h3>


                    <h3 className="tmpv"><Link to="/products/shirts" className="tmpv_header">Shirts</Link></h3>
                    
                    <h3 className="tmpv"><Link to="/products/stickers" className="tmpv_header">Stickers</Link></h3>
                </div>
            </div>
    )
}

export default NavBar