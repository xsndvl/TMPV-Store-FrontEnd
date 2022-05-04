import Items from "./Items"

const Home = () => {
    let img1v1 = require("../assets/BLACK_OLD1.JPG")
    let img1v2 = require("../assets/BLACK_OLD2.JPG")

    let img2v1 = require("../assets/GREY_OLD1.JPG")
    let img2v2 = require("../assets/GREY_OLD2.JPG")

    let img3v1 = require("../assets/RED_NEW1.JPG") 
    let img3v2 = require("../assets/RED_NEW2.JPG")

    let img4v1 = require("../assets/RED_OLD1.JPG")
    let img4v2 = require("../assets/RED_OLD2.JPG")



    return(
        <div>
            <h2 className="home">Home</h2>
            <h3>See Our New Collection</h3>
            <div className="home_items">
                <Items imgSrc1={img3v1} imgSrc2={img3v2} type={"Hoodie"}/>
                <Items imgSrc1={img1v1} imgSrc2={img1v2} type={"Hoodie"}/> 
                <Items imgSrc1={img2v1} imgSrc2={img2v2} type={"Hoodie"}/>
                <Items imgSrc1={img4v1} imgSrc2={img4v2} type={"Hoodie"}/> 
            </div>
        </div>
    )
}

export default Home