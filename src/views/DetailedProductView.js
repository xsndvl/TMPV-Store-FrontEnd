import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const DetailedProductView = () => {
    const {type} = useParams()
    const {id} = useParams()
    const [productData, setProductData] = useState([])

    useEffect(() =>{

        const fetchData = async() => {
            const API_URL = `http://localhost:3003/products/${type}/${id}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setProductData(resData)
        }
        fetchData()
    }, [id])
    
    // not sure why this is not working

    const detailImage = () =>  {
        let image_one = require(`../assets/${productData.image_one}`)

        return(
            <img src={image_one} alt={productData.image_one}/>
        )
    }

    return(
        <div className="inlineDetail">
            <h2>{productData.product_name}</h2>

            <div className="img_description">

                {detailImage}
                
                <p>{productData.description}</p>
                <h3>${productData.price}</h3>

            </div>
        </div>
    )
}

export default DetailedProductView