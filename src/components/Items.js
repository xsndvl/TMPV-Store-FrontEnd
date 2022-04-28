import { useState } from "react"

const Items = ({type, imgSrc1, imgSrc2}) => {
    let [ shownImage, setShownImage ] = useState(imgSrc1)
    return(
        <div className="items">
            <img src={shownImage} onMouseEnter={() => setShownImage(imgSrc2)} onMouseLeave={() => setShownImage(imgSrc1)} alt="Image" className="image"/>
            <p>description: This is a {type}</p>
        </div>
    )
}

export default Items