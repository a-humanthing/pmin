import "./CommentBox.css"
import CommentItem from "./CommentItem"
import { useState } from "react"
import ReplyComment from "./ReplyComment"
const CommentBox = () => {
  type CommentObject = {
    comment: string
    reply?: {
      comment: string
    }
  }
  const data: Array<CommentObject> = [
    {
      comment:
        "Hi Orlando Diggs , let's meet today. I want to tell you about my ideas. May",
      reply: { comment: "this is reply" },
    },
    { comment: "superb !", reply: { comment: "this is reply" } },
    { comment: "Awesome Post", reply: { comment: "this is reply" } },
  ]
  const [comments, setComments] = useState(data)
  const [newcomment, setNewcomment] = useState("")
  const handleComment = async () => {
    setComments([...comments, { newcomment }])
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
          return <CommentItem commentObj={item} />
        })}
        <ReplyComment comment="reply" />
      </div>
    </>
  )
}

export default CommentBox
