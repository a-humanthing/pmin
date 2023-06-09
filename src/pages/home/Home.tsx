import { useEffect, useState } from "react"
import HeadBar from "../../components/header/HeadBar"
import TopBar from "../../components/header/TopBar"
import "./Home.css"
import { instance } from "../../axios"
import Footer from "../../components/footer/Footer"
import ImageFirstPair from "../../components/blogs/ImageFirstPair"
import TextFirstPair from "../../components/blogs/TextFirstPair"
import ListSkeleton from "../../components/utils/ListSkeleton"
import PageTitle from "../../components/utils/PageTitle"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const token = localStorage.getItem("pminToken")
  const headers = { authorization: `Bearer ${token}` }
  const fetchBlogs = async () => {
    try {
      const response = await instance.get("/v2/posts?_embed", { headers })
      console.log("blogs-", response)
      setBlogs(response.data)
    } catch (error) {
      console.log("fetch blog error", error)
    }
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <>
      <PageTitle title="Blog Page" />
      <TopBar />
      <HeadBar text="Blog" />
      <div className="appContainer">
        <div className="homeContainer">
          {blogs.length < 1 && <ListSkeleton listsToRender={12} />}
          {blogs
            .filter((_item: any, index) => index < 2)
            .map((item: any) => {
              return (
                <>
                  <ImageFirstPair
                    id={item.id}
                    text={item.title.rendered}
                    imgurl={item._embedded["wp:featuredmedia"][0].source_url}
                  />
                </>
              )
            })}
          {blogs
            .filter((_item: any, index) => index < 4 && index > 1)
            .map((item: any) => {
              return (
                <>
                  <TextFirstPair
                    id={item.id}
                    text={item.title.rendered}
                    imgurl={item._embedded["wp:featuredmedia"][0].source_url}
                  />
                </>
              )
            })}
          {blogs
            .filter((_item: any, index) => index < 6 && index > 3)
            .map((item: any) => {
              return (
                <>
                  <ImageFirstPair
                    id={item.id}
                    text={item.title.rendered}
                    imgurl={item._embedded["wp:featuredmedia"][0].source_url}
                  />
                </>
              )
            })}
        </div>
      </div>
      <div className="blogImageDiv">
        <img
          src="/images/blogImage.png"
          className="blogImage"
          alt="Image In Blog"
        />
      </div>
      <Footer />
    </>
  )
}

export default Home
