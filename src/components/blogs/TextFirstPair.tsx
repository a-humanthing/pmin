import { Link } from "react-router-dom"
import "./Blog.css"
type blogType = {
  text: string
  imgurl: string
  id: number
}
const TextFirstPair: React.FC<blogType> = ({ text, imgurl, id }) => {
  return (
    <>
      <Link to={`/blog/${id}`} className="link">
        <div className="square">
          <div className="sqaurefont">
            <span className="smallFont">Product</span>
            <span className="blogSquareText">{text}</span>
          </div>
        </div>
      </Link>{" "}
      <Link to={`/blog/${id}`} className="link">
        <div className="square">
          <img src={imgurl} alt="" className="blogImage" />
        </div>
      </Link>
    </>
  )
}

export default TextFirstPair
