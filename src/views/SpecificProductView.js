import { useEffect, useState } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

const SpecificProductView = () => {
    let location = useLocation()
    const { type } = useParams()
    const [ productData, setProductData ] = useState([])

    useEffect(() => {
        location.pathname != "/" ? document.title = `TMPV ${capitalize(type)}` :
        document.title = "TMPV Store"
        const fetchData = async() => {
            const API_URL = `http://localhost:3003/products/${type}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setProductData(resData)
        }
        
        fetchData()
    }, [type])
    
    const capitalize = (string) => {
        return(string.charAt(0).toUpperCase() + string.slice(1))
    }

    const specificProducts = productData.map((product, i) => {
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

                    <h2>{product.product_name}</h2>

                    <p>${product.price}</p>
                </div>
            </Link>
        )
    }) 

    return(
        <div>
            <h1>{capitalize(type)} Page</h1>
            <div className="home_items">
                {specificProducts} 
            </div>
        </div>
    )
}

export default SpecificProductView