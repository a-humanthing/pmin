import Footer from "../../../components/footer/Footer"
import HeadBar from "../../../components/header/HeadBar"
import TopBar from "../../../components/header/TopBar"
import { useState, useEffect } from "react"
import "./Shop.css"
import { instance } from "../../../axios"
import { Skeleton } from "@mui/material"
import ListSkeleton from "../../../components/utils/ListSkeleton"

const Shop = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [array, setarray] = useState([1, 2, 3, 4, 5, , 6, 7, 8])
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
    setLoading(true)
    fetchBlogs()
    setLoading(false)
  }, [])
  return (
    <>
      <div className="appContainer">
        <TopBar />
        <HeadBar text="Shop" />
        <div className="shopContainer">
          {products.length < 1 && <ListSkeleton listsToRender={8} />}

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
