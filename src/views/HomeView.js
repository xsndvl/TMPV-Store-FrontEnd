import { Link } from "react-router-dom"
import HomeItems from "../components/HomeItems"

const HomeView = () => {
    return(
        <div>
            <button><Link to="/products">All Products</Link></button>
            <div className="HomeItemContainer">
                <Link to={`/products/hoodies`}><HomeItems type={"Hoodies"}/></Link>
                <Link to={`/products/shirts`}><HomeItems type={"Shirts"}/></Link>
                <Link to={`/products/stickers`}><HomeItems type={"Stickers"}/></Link>
                <Link to={`/products`}><HomeItems type={`All Products`}/></Link>
            </div>
        </div>
    )
}

export default HomeView