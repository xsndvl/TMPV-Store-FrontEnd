import Items from "./Items"

const Home = () => {
    let img1 = "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F43%2Fa7%2F43a70cd5df83399f2866041a0761d94ed399518e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"

    let img2 = "http://placekitten.com/200/300"

    return(
        <div>
            <h2 className="home">Home</h2>
            <h3>See Our New Collections:</h3>
            <div className="home-items">
                <Items imgSrc1={img1} imgSrc2={img2} type={"Hoodie"}/> 
                <Items imgSrc1={img2} imgSrc2={img1} type={"Shirt"}/>
                <Items imgSrc1={img1} imgSrc2={img2} type={"Hoodie"}/> 
                <Items imgSrc1={img2} imgSrc2={img1} type={"Shirt"}/>
            </div>
        </div>
    )
}

export default Home