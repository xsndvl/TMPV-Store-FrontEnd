import { useState, useEffect } from "react"
import { Link, Routes, Route } from "react-router-dom"

const ProductView = () => {
    const [ productData, setProductData ] = useState([])

    useEffect(() => {
        document.title = "Products"
        const fetchData = async () => {
            const API_URL = `http://localhost:3003/products`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setProductData(resData)
        }
        fetchData()
    }, [])

    

    // const justHoodies = productData.filter(product => product.product_type === "Hoodie")
    // console.log(justHoodies)

    const renderProducts = productData.map((product, i) => {
        let image_one = require(`../assets/${product.image_one}`)
        let image_two = require(`../assets/${product.image_two}`)

        const handleClick = () => {
            window.alert("clicked")
            console.log("clicked")
        }
        
        return(
            <div className="individual" key={i} onClick={handleClick} >
                <img src={image_one} onMouseEnter={e => e.currentTarget.src=image_two} onMouseLeave={e => e.currentTarget.src=image_one} alt={product.image_one}/>

                <h2>{product.product_name}</h2>

                <p>${product.price}</p>
            </div>
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