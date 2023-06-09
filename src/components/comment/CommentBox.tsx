import "./CommentBox.css"
import CommentItem from "./CommentItem"
import { useState } from "react"
import ReplyComment from "./ReplyComment"
const CommentBox = () => {
  const data: Array<string> = [
    "Hi Orlando Diggs , let's meet today. I want to tell you about my ideas. May",
    "Awesome Post",
  ]
  const [comments, setComments] = useState(data)
  const [newcomment, setNewcomment] = useState("")
  const handleComment = async () => {
    setComments([newcomment, ...comments])
    setNewcomment("")
  }
  return (
    <>
      <div className="commentContainer">
        <h4 className="primeFont">Comments</h4>
        <textarea
          id="commentfield"
          cols={30}
          rows={5}
          className="commentField"
          value={newcomment}
          onChange={(e) => setNewcomment(e.target.value)}
          placeholder="What are your thoughts?"
        ></textarea>
        <button className="commentButton" onClick={handleComment}>
          POST A COMMENT
        </button>
        {comments.map((item) => {
          return <CommentItem comment={item} />
        })}
        <ReplyComment comment="reply this" />
        <CommentItem comment="Good Day!" />
      </div>
    </>
  )
}

export default CommentBox
