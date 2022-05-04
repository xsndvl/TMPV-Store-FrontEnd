import { useState, useEffect } from "react"

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
    

    // console.log("ehy")

    const renderProducts = productData.map((product, i) => {
        return(
            <div key={i}>
                <p>This is the name: {product.product_name}</p>
            </div>
        )
    }) 
    
    return(
        <div>
            <h1>Product View</h1>
            {renderProducts}
        </div>
    )
}

export default ProductView