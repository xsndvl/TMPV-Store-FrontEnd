import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ProductView = () => {
    
    const [ productData, setProductData ] = useState([])


    useEffect(() => {
        document.title = "TMPV Products"
        
        const fetchData = async () => {
            const API_URL = `http://localhost:3003/products`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setProductData(resData)
        }
        fetchData()
    }, [])

    const renderProducts = productData.map((product, i) => {
        let image_one = require(`../assets/${product.image_one}`)
        let image_two = require(`../assets/${product.image_two}`)

        const handleClick = (product) => {
            switch(product.product_type) {
                case "Hoodie":
                    return "hoodies"
                case "Shirt":
                    return "shirts"
                case "Sticker":
                    return "stickers"
            }
        }

        const handleClickProduct = (product) => {
            return(product.product_id)
        }
        
        return(
            <Link to={`/products/${handleClick(product)}/${handleClickProduct(product)}`} key={i}>
                <div className="individual" onClick={handleClick} >
                    <img src={image_one} onMouseEnter={e => e.currentTarget.src=image_two} onMouseLeave={e => e.currentTarget.src=image_one} alt={product.image_one}/>

                    {/* TEMPORARY FIX BECAUSE TAN SHIRT DOES NOT EXIST, SHOULD BE <h2>{product.product_name}</h2> */}
                    <h2>{product.product_name === "Tan Shirt Original Design" ? "Grey Shirt Original Design" : product.product_name}</h2>

                    <p>${product.price}</p>
                </div>
            </Link>
        )
    }) 
    
    return(
        <div>
            <h1>Product View</h1>
            <div className="home_items">
                {renderProducts}
            </div>
        </div>
    )
}

export default ProductView