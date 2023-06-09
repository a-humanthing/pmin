import { BsReply } from "react-icons/bs"
type commentType = {
  comment: string
}
const CommentItem: React.FC<commentType> = ({ comment }) => {
  return (
    <>
      <div className="commentItemContainer">
        <div className="profileSection">
          <img
            src="/images/proIcon.png"
            alt="profile icon"
            className="profilePic"
          />
          <span className="accountname">Candice Mu.</span>
          <span className="timeStatus">1 hour ago</span>
        </div>
        <div className="comment">
          <span className="commentText">{comment}</span>
        </div>
        <div className="reply">
          <span className="replyIcon">
            <BsReply />
            Reply
          </span>
        </div>
      </div>
    </>
  )
}

export default CommentItem
