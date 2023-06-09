import Footer from "../../../components/footer/Footer"
import HeadBar from "../../../components/header/HeadBar"
import TopBar from "../../../components/header/TopBar"
import { useState, useEffect } from "react"
import "./Shop.css"
import { instance } from "../../../axios"

const Shop = () => {
  const [products, setProducts] = useState([])
  const token = localStorage.getItem("pminToken")
  const headers = { authorization: `Bearer ${token}` }
  const fetchBlogs = async () => {
    try {
      const response = await instance.get("/v2/posts?_embed", { headers })
      console.log("blogs-", response)
      setProducts(response.data)
    } catch (error) {
      console.log("fetch blog error", error)
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <>
      <div className="appContainer">
        <TopBar />
        <HeadBar text="Shop" />
        <div className="shopContainer">
          {products.map((item: any) => {
            return (
              <div className="product">
                <img
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  className="shopImage"
                  alt=""
                />
                <div className="textOnImage ">
                  <span className="shopTitle">MIST</span>
                  <span className="shopTitle">Hydrating Mist</span>
                  <span className="shopTitle">$28</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop