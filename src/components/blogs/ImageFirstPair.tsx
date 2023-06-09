import { Link } from "react-router-dom"
import "./Blog.css"
type blogType = {
  imgurl: string
  text: string
  id: number
}
const ImageFirstPair: React.FC<blogType> = ({ imgurl, text, id }) => {
  return (
    <>
      <Link to={`/blog/${id}`} className="link">
        <div className="square">
          <img src={imgurl} alt="" className="blogImage" />
        </div>
      </Link>
      <Link to={`/blog/${id}`} className="link">
        <div className="square">
          <div className="sqaurefont">
            <span className="smallFont">Product</span>
            <span className="blogSquareText">{text}</span>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ImageFirstPair
