import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from "react-bootstrap/Button"

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
    
    console.log(productData)
    console.log(productData.image_one)
    
    
    // not sure why this is not working


    // const detailImage = () =>  {
    //     let image_one = require(`../assets/${productData.image_one}`)

    //     return(
    //         <img src={image_one} alt={productData.image_one}/>
    //     )
    // }

    const imgSource = (type) => {
        switch (type) {
            case "Hoodie":
                return (require("../assets/RED_NEW1.JPG"))
            case "Shirt":
                return(require("../assets/RED_OLD2.JPG"))
            case "Sticker":
                return("https://cdn.dribbble.com/users/310241/screenshots/10927102/media/202f0e54810b05f38782aa573ad85b2f.png?compress=1&resize=400x300")
        }
    }
    
    return(
        <div className="inlineDetail">
            <h2>{productData.product_name}</h2>

            <div className="img_description">

                {/* {detailImage} */}
{/*                 
                <img src={require(`../assets/${productData.image_one}`)} /> */}

                <img src={imgSource(productData.product_type)} alt={"Hoodie"}/>
                
                <p className="description">{productData.description}</p>
                <h3>${productData.price}</h3>

                <button>Buy</button>

            </div>
        </div>
    )
}

export default DetailedProductView